import { motion } from "framer-motion"
import { AiOutlineCalendar, AiOutlineEnvironment } from 'react-icons/ai'

export default function Experience({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {experience.title}
            </h3>
            <h4 className="text-xl text-teal-600 dark:text-teal-400 font-semibold mb-2">
              {experience.company}
            </h4>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
            <div className="flex items-center gap-1 mb-1">
              <AiOutlineCalendar className="text-teal-500" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineEnvironment className="text-teal-500" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
        
        {experience.role && (
          <div className="mb-3">
            <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm font-medium">
              {experience.role}
            </span>
          </div>
        )}

        {experience.description && (
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {experience.description}
          </p>
        )}

        {experience.achievements && experience.achievements.length > 0 && (
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-teal-500 mt-1">▸</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

