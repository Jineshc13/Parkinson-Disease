import React from 'react';
import { XMarkIcon, MicrophoneIcon, } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const links = [
  { name: 'World Health Organization', to: 'https://www.who.int/news-room/fact-sheets/detail/parkinson-disease#:~:text=Global%20estimates%20in%202019%20showed,of%20over%20100%25%20since%202000' },
  { name: 'National Institute of Healthcare', to: 'https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease' },
  { name: 'Events', to: 'https://www.ninds.nih.gov/news-events/events' },
]
const stats = [
  { name: 'Patients worldwide', value: '8.5 Million' },
  { name: 'Males are more likely to develop parkinsons than female', value: '1.5 times' },
  { name: 'People are diagnosed before age 50', value: 'Around 4%' },
  { name: 'Out of all the PD patients are from India', value: '9.1%' },
]

const features = [
  {
    name: 'Voice Analysis',
    description: 'Detect Parkinson\'s disease through voice analysis. Changes in speech patterns and voice characteristics can indicate the presence of Parkinson\'s.',
    icon: MicrophoneIcon,
  },
  {
    name: 'Symptom Monitoring',
    description: 'Track and monitor Parkinson\'s symptoms over time using advanced algorithms that analyze speech patterns for changes and trends.',
    icon: MicrophoneIcon,
  },
  {
    name: 'Early Detection',
    description: 'Identify early signs of Parkinson\'s disease through speech analysis, allowing for timely intervention and treatment.',
    icon: MicrophoneIcon,
  },
  {
    name: 'Soft or Monotone Voice',
    description:
      'A soft or monotone voice is a common symptom of Parkinson\'s disease. It often results from reduced muscle control and coordination in the vocal cords and throat muscles.',
    icon: MicrophoneIcon,
  },
  {
    name: 'Slurred Speech',
    description:
      'Slurred speech, also known as dysarthria, can occur in Parkinson\'s disease due to muscle stiffness and weakness in the tongue, lips, and throat, affecting articulation and pronunciation.',
    icon: MicrophoneIcon,
  },
  {
    name: 'Rapid Speech',
    description:
      'Rapid speech, also called tachyphemia, may manifest in some individuals with Parkinson\'s disease. It involves speaking too quickly or with irregular rhythm, making it difficult for others to understand.',
    icon: MicrophoneIcon,
  },
  {
    name: 'Voice Tremors',
    description:
      'Voice tremors, characterized by involuntary trembling or shaking of the voice, are another common symptom of Parkinson\'s disease. They can affect the clarity and stability of speech.',
    icon: MicrophoneIcon,
  },
];

export default function Example() {

const [showBanner, setShowBanner] = useState(true);

const handleCloseBanner = () => {
  setShowBanner(false);
};


  return (
    <div style={{ overflow: 'auto' }}>

    <Navbar/>

      {showBanner && (
  <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-gray-300 to-gray-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    {/* Background */}
    <div
      className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      aria-hidden="true"
    >
      <div
        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-gray-300 to-gray-600 opacity-30"
        style={{
          clipPath:
            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
        }}
      />
    </div>
    <div
      className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      aria-hidden="true"
    >
      <div
        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-gray-400 to-gray-800 opacity-30"
        style={{
          clipPath:
            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
        }}
      />
    </div>
    {/* Content */}
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="text-sm leading-6 text-gray-900">
        <strong className="font-semibold">Want to Detect Parkinson's Disease?</strong>
        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
          <circle cx={1} cy={1} r={1} />
        </svg>
        Learn about the detection methods, signs, and symptoms of Parkinson's disease and how early detection can make a difference.
      </p>
      <Link
        to="/detection"
        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        Learn More <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
    {/* Close Button */}
    <div className="flex flex-1 justify-end">
      <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleCloseBanner}>
        <span className="sr-only">Dismiss</span>
        <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
      </button>
    </div>
  </div>
)}





      {/* Your existing content */}
      <div className="overflow-hidden bg-white py-12 sm:py-16 flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              <Link to="https://www.parkinson.org/understanding-parkinsons" target="_blank" rel="noopener noreferrer">
                Parkinson's Disease
              </Link>
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Detection & Management through Speech</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Parkinson's disease is a progressive neurological disorder primarily affecting movement. Utilizing speech analysis and recognition technology can aid in its early diagnosis and management. By leveraging machine learning and artificial intelligence, we can develop tools that analyze speech characteristics to provide valuable insights for treatment and improve the quality of life for individuals with Parkinson's.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <img 
            src="../../public/images/12556338_5008217.svg"
            alt="Health Professional Team"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={1500} //2432
            height={1100} //1442
          />


        </div>
      </div>

      {/* New content section */}
        <div className="bg-white py-24 sm:py-20">
    <div className="mx-auto max-w-8xl px-6 lg:px-8">
      <div className="mx-auto max-w-6xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          <Link to="https://www.parkinson.org/understanding-parkinsons/non-movement-symptoms/speech-swallowing" target="_blank" rel="noopener noreferrer">
          Parkinson's Disease Speech Symptoms
          </Link>
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Understanding Speech Changes in Parkinson's
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Speech changes are common symptoms of Parkinson's disease and can manifest in various ways. These changes may include soft or monotone voice, slurred speech, rapid speech, or hesitation before speaking. Understanding these symptoms is crucial for early detection and effective management of Parkinson's disease.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.slice(3).map((feature, index) => (
            <div key={index} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <MicrophoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>

  <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Facts About Parkinson's</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Parkinson's disease (PD) is a progressive brain disorder affecting movement, mental health, sleep, and pain. While incurable, therapies and medications can ease symptoms like tremors and speech difficulties. PD often leads to disability, with dementia common. Although more prevalent in older individuals, younger people, especially men, can also develop PD.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <Link key={link.name} to={link.to}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>


    {/* james bhai*/}

    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">English surgeon and apothecary</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">James Parkinson</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              James Parkinson (1755-1824) was a versatile figure renowned for his groundbreaking contributions to medicine and other fields. His seminal work "An Essay on the Shaking Palsy," published in 1817, meticulously detailed the symptoms of what we now identify as Parkinson's disease, laying the groundwork for its study. Despite its significance, his essay wasn't widely recognized in his lifetime. Apart from medicine, Parkinson excelled in diverse areas such as politics, chemistry, and paleontology. His monumental work "Organic Remains of a Former World" earned him acclaim in paleontology, establishing him as a prominent figure in the scientific community and a founding member of the Geological Society of London. Parkinson's interdisciplinary pursuits and extensive contributions across various disciplines earned him recognition as a polymath. His legacy endures through his profound impact on neurology and natural science, solidifying his reputation as "Mr. Parkinson, the Paleontologist," a testament to his intellectual curiosity and enduring influence.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:justify-end">
          <img
            src="https://www.researchgate.net/profile/Jonathan-Carr-4/publication/5335582/figure/fig1/AS:720787690516480@1548860585065/Photograph-of-Dr-James-Parkinson-1755-1825.jpg"
            alt="Product screenshot"
            className="w-[20rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
          </div>
        </div>
      </div>
    </div>


    {/*Footer*/}

    <Footer/>






    </div>
  );
}
