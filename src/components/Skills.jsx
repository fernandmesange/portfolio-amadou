import { Badge } from "@/components/ui/badge"

const skills = [
  "Python 🐍",
  "SQL 🗃️",
  "Apache Spark ✨",
  "Apache Airflow 🌬️",
  "Hadoop 🐘",
  "Machine Learning 🤖",
  "Data Visualization 📊",
  "ETL 🔄",
  "Big Data 🗄️",
  "Cloud Computing ☁️",
  "Docker 🐳",
  "Kubernetes 😊",
]

function Skills() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">Mes outils 🧰</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-sm py-2 px-4 bg-white/50 backdrop-blur-md hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

export default Skills

