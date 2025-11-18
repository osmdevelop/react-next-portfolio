import { motion } from "framer-motion"
import { AiFillLinkedin } from 'react-icons/ai'

export default function Recommendations({ recommendation, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-teal-200 dark:border-gray-700"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
            {recommendation.name}
          </h3>
          <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
            {recommendation.title}
          </p>
        </div>
        {recommendation.linkedin && (
          <a
            href={recommendation.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            <AiFillLinkedin className="text-2xl" />
          </a>
        )}
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
        "{recommendation.quote}"
      </p>
    </motion.div>
  )
}

