import React from 'react'

interface AnimatedCardProps {
  width?: string
  height?: string
  titleSize?: string
  titleText?: string
  enableAnimation?: boolean
  backgroundColors?: string[]
  textColor?: string
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  width = '100%',
  height = '100%',
  titleSize = 'text-5xl',
  titleText = 'Animated SVG<br/>with React & Tailwind CSS',
  enableAnimation = true,
  backgroundColors = ['#fc5c7d', '#6a82fb', '#05dfd7'],
  textColor = 'text-white',
}) => {
  const backgroundGradient = `linear-gradient(-45deg, ${backgroundColors.join(
    ', ',
  )})`
  const title = titleText.split('<br/>').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))
  return (
    <div className="w-full h-full">
      <style>
        {`
        @keyframes rotate {
          0% { transform: rotate(3deg); }
          100% { transform: rotate(-3deg); }
        }

        @keyframes gradientBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          66% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-gradient {
          animation: gradientBackground 10s ease infinite;
          background-size: 600% 400%;
        }

        .animate-rotate {
          animation: rotate ease-in-out 1s infinite alternate;
        }

        .animate-fadeIn {
          animation: fadeIn 3s ease 0s normal forwards;
        }

        .animated-card {
          height: ${height}px;
          width: ${width}px;
          background: ${backgroundGradient};
          background-size: 600% 400%;
          animation: gradientBackground 10s ease infinite;
        }
      `}
      </style>
      <div
        className={`animated-card w-full h-full flex flex-col items-center justify-center m-0 rounded-t-lg p-8 ${
          enableAnimation ? 'animate-gradient' : ''
        } ${textColor}`}
      >
        <h1
          className={`${titleSize} text-shadow ${
            enableAnimation ? 'animate-rotate' : ''
          }`}
        >
          {title}
        </h1>
      </div>
    </div>
  )
}

export default AnimatedCard
