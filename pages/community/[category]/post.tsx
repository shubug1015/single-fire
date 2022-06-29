import SEO from '@components/seo';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useUser } from '@libs/client/useUser';
import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromRaw,
  convertFromHTML,
} from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Layout from '@layouts/sectionLayout';
import AWS from 'aws-sdk';
import { v1 } from 'uuid';
import { FieldErrors, useForm } from 'react-hook-form';
import { communityApi } from '@libs/api';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface IProps {
  category: string;
}

interface IForm {
  subject: string;
  title: string;
}

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  {
    ssr: false,
  }
);

const Post: NextPage<IProps> = ({ category }) => {
  const { token } = useUser({ isPrivate: true });
  const router = useRouter();
  const id = router.query.id;
  const { data } = useSWR(
    token && id ? `/community/${category}/${id}/` : null,
    () => communityApi.getDetail(category, id as string, token as string)
  );
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });
  const onValid = async ({ subject, title }: IForm) => {
    try {
      const content = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );
      if (id) {
        await communityApi.editDetail(
          category,
          id as string,
          subject,
          title,
          content,
          token as string
        );
      } else {
        await communityApi.writeDetail(
          category,
          subject,
          title,
          content,
          token as string
        );
      }

      router.back();
    } catch {
      alert('Error');
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const onEditorStateChange = (editorState: EditorState) =>
    setEditorState(editorState);

  const uploadImage = (file: any) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject('Invalid file.');
      }

      const s3 = new AWS.S3({
        accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
        region: process.env.NEXT_PUBLIC_REGION,
      });

      s3.upload(
        {
          Bucket: 'single-fire',
          Body: file,
          Key: `uploads/${v1()}.${file.name}`,
          ContentType: file.type,
          ACL: 'public-read',
        },
        function (err: any, data: any) {
          if (err) {
            console.log(err);
            return reject('There was an error uploading your image: ');
          }
          resolve(data.Location);
        }
      );
    });
  };

  const uploadImageCallBack = (file: any) => {
    return new Promise((resolve, reject) => {
      uploadImage(file)
        .then((link) => {
          resolve({ data: { link } });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    setValue('subject', data?.subject);
    setValue('title', data?.title);
    if (data) {
      const blocksFromHTML = convertFromHTML(data?.content);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(state));
    }
  }, [data]);
  return (
    <Layout padding='pt-10 pb-44 md:pb-20'>
      <div className='flex justify-between'>
        <input
          type='text'
          placeholder='주제를 입력하세요.'
          {...register('subject', {
            required: '주제를 입력해주세요',
          })}
          className='bg-transparent outline-none md:w-60 md:text-sm'
        />

        <div
          onClick={handleSubmit(onValid, onInvalid)}
          className='flex h-[2.625rem] w-[6.25rem] cursor-pointer items-center justify-center rounded-sm bg-[#00e7ff] text-sm font-medium text-[#282e38] md:w-20'
        >
          발행
        </div>
      </div>

      <div className='mt-10 md:mt-6'>
        <input
          type='text'
          placeholder='제목을 입력하세요.'
          {...register('title', {
            required: '제목을 입력해주세요',
          })}
          className='w-full bg-transparent text-[1.625rem] outline-none md:text-xl'
        />
      </div>

      <div className='mt-12 md:mt-8'>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName='wrapper'
          toolbarClassName='toolbar'
          editorClassName='editor'
          placeholder='내용을 작성해주세요.'
          toolbar={{
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
            image: {
              uploadCallback: uploadImageCallBack,
              previewImage: true,
              alt: { present: true, mandatory: false },
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            },
          }}
          localization={{
            locale: 'ko',
          }}
        />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      category: ctx.params?.category,
    },
  };
};

export default Post;
