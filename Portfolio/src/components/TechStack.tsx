import { motion } from 'motion/react';

const technologies = [
  { name: 'JAVA', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfVjaZfuRxgB0B9ch9z18Ea5vPTjoUyRAT8rhWiETdVP3AgnwuG_YEBb2Uh5hsb1F-_5cJLfwuQmf2ekiNM9nOCoH_8MZ61-bJjBOdnWHc-JOYzj1m1qTJe0VdnJoo7SZQ1Dsr3MnReVxazxEZPzSqymRdK96Vfhxv5q5iemtTYcHaJ1GElXyN9lvxLwkMCopTzAzq01KZ3G7gxBp1D7qf44rfOsZAcXsYsO5iQo3dlbgbb7njI6vnIxSliBmTVpIQ4yhiy1bvAj0' },
  { name: 'SPRING BOOT', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM3K6IHloAPcaywUWS2gND3FMA7NYcA5s1anHpAjVWE-wpOrAbr7L4S8xVIRnMvdVRsqOa_zSmeJbq3g4yhzSwUtHqHbuie3sYqd968RmpnMIhSsnJDdl8LraM3RIAr9vbZzmEjlJG98YZ_WFZOqNi090xfq8f4lhzyEyu_9O58qJFSu_J3_s_ze5VMvhAq4-Uv1KKZfnLYFukdaqOb4BqHTOL_k_jBzZnpnCNj9SnoWR-CIAxSqJlRDgtptFdjL_GltWZnOIZ4EE' },
  { name: 'REACT', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-8BgcyormiT6jbBVuKeUT6emN0Vtkk5GVzhanxemGY3xulRBkUstWRv649LdwpjIdFqG_ijV6BprJ1N3xFc5y_FmNk8XIyTiWm1diDVoplt3IfG_-zm3cAbHoDrSraNfm66xZlJ9b1d1uo9FXnmICOnL3zkGLVykUZbuh5wc2YdXAS5mr682sleU17ekjKtiZHO-MuV3Aed8kQg9Mgj0ahFIeOwrB5vqtFTOEhrR8FjIu5qyTAAj3CGAAwqCNbLV1dd3vaF1DGQg' },
  { name: 'DOCKER', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5r841M_Z5oj3itR249Km25QLDQeuZs0JKcyFn5UEh4HWwwiP-C1bjaABQLpum95oJ--CIPnHIr0jaWT4OI3rdbX5qwtNacxLjO4mlKeji51vDJ3sQFMDQtJObv-G-utXsaVpJCmni8v0jrwo7b6Fg3Cc2yIBipi-a5EFp-gtUystMHgvxWTg_HvYraiieEwn-kdFzhFscruOXPRkA0ViBpeSqlbgESHZepK_wwwEEuZR72YShdLu48jGJP8_bi8aJs3KycoMYQGE' },
  { name: 'MONGODB', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJWWk8T6p5L909-z5qw_kA1fEamxwE1aztTUeC2stJ_1LsvY7aE-PFkNWbiOtrHg3XT9kOSMxZg7Kzwf6MK-pOpuhXVNfU0PddtwbMNpxjrGRxsnwXnbp6qsYpCU42ZCfzQqt2izF0OyXAjY7ZNuNQh3g91tIiPmkfV68p1ItWykh2gr9mgYvGYmGJBpbf_1TNYVhyXACHKMF5DOyfUE1snzyQ-7yAHpbpCAPjUHM6cizAFgnrTzTfJneux3P_DTSPcDOjxWcs-QA' },
  { name: 'MYSQL', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2arsB673Wy0o3YJoKY_xIBl6a-pX3kD8HyBnagqtLYlOPfjIkKNZKTyLCEXCjeCITi1PGOXZBBtB-jba5O57rxOS8sIY1HrPT1YErYB5eeuanLd5pmrF9woN_C25LJO98rJyXzP7u4_WgNPuMtnir03u-QF9MBo4BVMHdiQQ9wQfLZvK0-gGgYIAblZ2Lt7II_ZjxU0I3SXLHQN93VDmD9WE4g8rZ4vEETyvPp7pP7PwaZ_Gn9QAYs8ov48m97yTxIIrT_8IIX7M' },
  { name: 'TAILWIND', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy1oBlTX8A4oUaKUQsnd0kxn8d1uZheMf6nZ9FCIkQOl1itO2wf6BVE5LUVzzTiNR9guD6CHzglCt_Ocxr3oMYOdf4o1z8l2tT1m20DKgT3On6IVEIxuEebx97oUZc13g7NG6QATQetmsSxLvlAbGkroaBTTIvznwZiQFMr_A8Uh1a0YEpJ5Cjrow9Uqr9yvdaXYN5hODobJS6VWlufcTe37F1-duai6Fw8fw2tEI5unPf_KxS7mKl2aVq7luSsSyLiqgG2hhmsvk' },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-surface-container-low/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-xs tracking-[0.2em] text-secondary uppercase mb-12 text-center opacity-60">Standardized Tech Stack</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {technologies.map((tech, index) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="h-12 w-12 object-contain" 
                referrerPolicy="no-referrer"
              />
              <span className="font-label text-[10px] text-on-surface-variant tracking-wider">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
