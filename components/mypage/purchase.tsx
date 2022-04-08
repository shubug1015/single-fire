import { useState } from 'react';
import Popup from './popup';

interface IProps {
  state: string;
  type: string;
  category: string;
  tutor: string;
  title: string;
  date: string;
  price: number;
  discount: number;
  payment: string;
}

export default function Purchase({
  state,
  type,
  category,
  tutor,
  title,
  date,
  price,
  discount,
  payment,
}: IProps) {
  const [paymentPopup, setPaymentPopup] = useState(false);
  const [refundPopup, setRefundPopup] = useState(false);

  const closePaymentPopup = () => setPaymentPopup(false);
  const closeRefundPopup = () => setRefundPopup(false);
  return (
    <>
      <div className='flex w-full flex-col space-y-6 rounded bg-[#4a4e57] p-8'>
        <div className='flex w-full items-center justify-between'>
          <div className='text-lg font-bold'>{state}</div>

          <div className='flex space-x-6'>
            <div
              onClick={() => setPaymentPopup(true)}
              className='flex cursor-pointer items-center'
            >
              <span className='text-xs'>결제확인서 발급</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mt-0.5 ml-2 w-2.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={3}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>

            <div
              onClick={() => setRefundPopup(true)}
              className='flex cursor-pointer items-center'
            >
              <span className='text-xs'>환불신청</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mt-0.5 ml-2 w-2.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={3}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </div>
        </div>

        <div className='flex w-full divide-x divide-[rgba(255,255,255,0.16)]'>
          <div className='w-2/3 space-y-1.5 pr-8'>
            <div className='text-sm font-medium text-[#00e7ff]'>{type}</div>
            <div className='text-sm font-medium text-[#b1b1b1]'>
              {category} ˙ {tutor}
            </div>
            <div className='text-lg font-medium'>{title}</div>
          </div>

          <div className='space-y-1.5 pl-8 text-sm'>
            <div className='flex'>
              <div className='w-24 opacity-80'>결제 날짜</div>
              <div>{date}</div>
            </div>

            <div className='flex'>
              <div className='w-24 opacity-80'>결제 금액</div>
              <div>{price.toLocaleString()} 원</div>
            </div>

            <div className='flex'>
              <div className='w-24 opacity-80'>할인 금액</div>
              <div>{discount.toLocaleString()} 원</div>
            </div>

            <div className='flex'>
              <div className='w-24 opacity-80'>총 결제 금액</div>
              <div>{(price - discount).toLocaleString()} 원</div>
            </div>

            <div className='flex'>
              <div className='w-24 opacity-80'>결제 수단</div>
              <div>{payment}</div>
            </div>
          </div>
        </div>
      </div>

      {paymentPopup && (
        <Popup
          title='결제확인서 발급'
          content={
            '-일반결제 시 기재하신 이메일 주소로 ‘KG이니시스’를 통해 영수증이 자동 발송됩니다. 스팸메일함도 함께 확인 부탁드립니다.\n-간편결제 시에는 결제하신 서비스 페이지를 통해 결제 내역을 확인해 주세요. 확인이 되지 않을 경우 밀레니얼 머니스쿨(help@company.co.kr)로 문의주시면 상세 안내드리겠습니다.'
          }
          closePopup={closePaymentPopup}
        />
      )}

      {refundPopup && (
        <Popup
          title='환불신청'
          content={
            '환불신청 또는 환불금액 관련 문의는\nhelp@company.co.kr로 문의주시면 상세히 안내드리겠습니다.'
          }
          closePopup={closeRefundPopup}
        />
      )}
    </>
  );
}
