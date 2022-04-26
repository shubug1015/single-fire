import SEO from '@components/seo';
import type { NextPage } from 'next';
import Layout from '@layouts/sectionLayout';

const TemrsOfService: NextPage = () => {
  return (
    <>
      <SEO title='환불규정' />
      <Layout padding='py-20'>
        <div className='rounded-lg bg-[#373c46] p-[3.75rem]'>
          <span className='font-bold'>[주의사항 및 환불규정]</span>
          <br />
          <br />
          * 온라인 강의 구매시점부터 6개월 동안 수강이 가능합니다.
          <br />
          * 온라인 강의 결제를 완료한 회원은 로그인 후 우측 상단 마이페이지를
          클릭하고 내강의실에서 강의 목록을 확인, 수강할 수 있습니다. <br />
          * 커뮤니티 상품은 결제시 선택한 바에 따라 1개월 혹은 3개월 동안 참여가
          가능합니다.
          <br />
          * 커뮤니티 상품 결제를 완료한 회원은 로그인 후 우측 상단 마이페이지를
          클릭하고 내강의실에서 커뮤니티 바로가기를 통해 게시판에 접속, 활동에
          참여할 수 있습니다.
          <br />
          * 온라인 강의와 커뮤니티 상품은 당사의 자체 결정에 따라 사전 공지없이
          할인을 조기 마감하거나 연장할 수 있습니다.
          <br />
          * 당사가 제공하는 콘텐츠는 상황 변화나 필요에 따라 추가 또는
          업데이트될 수 있습니다.
          <br />
          * 천재지변, 폐업 등 서비스 중단이 불가피한 경우에는 서비스가 종료될 수
          있습니다.
          <br />* 환불금액은 정가가 아닌 실제 계산하신 금액을 기준으로
          계산됩니다. <br />
          * 온라인 강의 및 커뮤니티 상품 결제 후 24시간 이내 또는 강의 영상 2개
          미만 수강시 100% 환불이 가능합니다. 단, 결제 후 24시간이 초과하거나
          강의를 2개 이상 재생했을 경우 환불이 불가합니다.
          <br />
          * 온라인 강의 및 커뮤니티 상품 결제 후 관련 자료를 이미 다운받은
          경우에는 결제 이후 시간과 강의 재생여부와 무관하게 환불을 받을 수
          없습니다. <br />
          * 규정된 환불요건 이외의 사정으로 인한 환불 문의는 고객센터로 별도
          문의주시기 바랍니다. <br />* 당사에서 회원에게 제공되는 모든 콘텐츠는
          저작권법에 따라 보호되며 무단 가공 후 게재, 유포, 배포시 법적 처벌을
          받을 수 있습니다.
        </div>
      </Layout>
    </>
  );
};

export default TemrsOfService;
