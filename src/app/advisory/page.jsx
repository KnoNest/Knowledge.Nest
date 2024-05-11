import React from 'react';
import advisory from '../../../public/advisor.png';
import Image from 'next/image';

const Advisory = () => {
  return (
    <div className="lg:w-[50rem] md:w-[40rem] w-[20rem] m-auto mt-[10rem] mb-[5rem]">
      <div className='flex gap-2 mb-3'>

        <Image src={advisory} alt="adivsory image" width={200} height={200} className='w-[4rem] h-[4rem] rounded-full' />
        <div className='ml-[1rem] text-[1.2rem] font-medium'>
          <p>Rachna tulsyan Bhimrajka</p>
          <p className='opacity-80'>Board of advisory</p>
        </div>

      </div>
      <p className="text-gray-500">
        Ms. Rachna Bhimrajka, founder Chairperson of Global Educators Fraternity
        and FUN2LEARN, is a dynamic, enthusiastic, innovative, dedicated, and
        focused entrepreneur and educationist. She is a social activist, an
        influencer, a motivational international speaker, a co-author, a
        curriculum designer, and has designed more than 17 books on handwriting
        improvement, Vedic maths, abacus, etc., with copyrights from the Govt.
        of India. She has been an edupreneur for more than a decade and a half.
        An expert in handwriting, graphology, and career counseling, she
        conducts several training programs and workshops for various age groups.
        She has trained over 125,000 students and works on women empowerment
        and the Beti Padhao, Beti Bachao initiative. She has trained thousands
        of teachers and helped make them financially independent.
      </p>
      <p className="text-gray-500 mt-6">
        She firmly believes that your handwriting speaks about your personality.
        She is associated with many social and educational organizations and
        has received numerous award- s for her tireless efforts.
      </p>

      <ul className="text-gray-500 mt-6">
        <li>- Founder of Global Educator Fraternity</li>
        <li>- World Book of Records UK Holder</li>
        <li>- World Wide Top Records Holder 2021</li>
        <li>- Great Indian Books of Record Holder 2021</li>
        <li>- Dada Saheb Phalke Icon Award 2019</li>
        <li>- Innovative Learning Award from the Education Council of India 2020</li>
        <li>- International Progressive Women's Award 2019</li>
        <li>- Ratan Samman Award</li>
        <li>- Noble Asian Awards</li>
        <li>- Gem of India Award</li>
        <li>- Naari Shakti Achievers Awards</li>
        <li>- Indian Legends Awards</li>
        <li>- Social Activists Award by DNA New Delhi and Indian Bravehearts</li>
        <li>- Skill and Education Eminence Award</li>
        <li>- Indian Star Award</li>
        <li>- Nation Builder Award</li>
      </ul>

      <div className="mt-6">
        <ul className="text-gray-500">
          <li>- National level Handwriting Championship - to create awareness for good handwriting and its importance</li>
          <li>- Acharya Chanakya Shikshavid Samman - to felicitate educators across the globe for their services to the nation</li>
          <li>- Naari Tu Narayani Samman - to empower women</li>
        </ul>
      </div>

      <p className="text-gray-500 mt-6">
        Ms. Rachna Bhimrajka has been featured in many newspapers and magazines
        across India, including major publications like the Mumbai Mirror 2015,
        Times of India (NIE) 2017, Hindustan Times, Free Press Journal 2020,
        and Robin Age 2015.
      </p>
    </div>
  );
};

export default Advisory;
