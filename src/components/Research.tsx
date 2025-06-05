
import React from 'react';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

interface ResearchItem {
  title: string;
  Collaborators?: string[];
  collaboratorLinks?: { [key: string]: string };
  description: string;
  type: string;
  publisher?: string;
  doi?: string;
  year?: string;
  tags?: string[];
}

const Research = () => {
  const researchItems: ResearchItem[] = [    {
      title: "An IoT-and cloud-based e-waste management system for resource reclamation with a data-driven decision-making process",
      Collaborators: ["Mr. Abu Bakar Fahad","Mithila Farjana", "Dr.Motaharul Islam"],
      collaboratorLinks: {
        "Mr. Abu Bakar Fahad": "https://scholar.google.com/citations?user=RYPoXlYAAAAJ&hl=en",
        "Dr.Motaharul Islam": "https://cse.uiu.ac.bd/faculty/motaharul/"
      },
      description: "This research presents an integrated system leveraging IoT and cloud computing technologies to optimize the end-to-end process of e-waste and recyclable waste management. The proposed solution enhances efficiency by enabling real-time waste monitoring, smart collection, and automated routing to designated recycling or disposal facilities. A data-driven decision-making framework supports operational planning, route optimization, and resource allocation, ensuring faster, more sustainable, and intelligent waste handling and resource reclamation.",
      type: "Journal",
      publisher: "MDPI",
      doi:"https://doi.org/10.3390/iot4030011",
      year: "2023",
      tags: ["IoT", "Machine Learning", "Deep Learning", "GAN"]
    },    {
      title: "Thought Scope: Human Cognitive Thinking Classification from Eye Position using Deep Learning and Digital Image Processing",
      Collaborators: ["Abu Bakar Fahad","Mithila Farjana", "Mr. Raiyan Rahman"],
      collaboratorLinks: {
        "Abu Bakar Fahad": "https://scholar.google.com/citations?user=RYPoXlYAAAAJ&hl=en",
        "Mr. Raiyan Rahman": "https://www.linkedin.com/in/raiyan-rahman-rr/?originalSubdomain=bd"
      },
      description: "This research proposes an advanced model that integrates deep learning and digital image processing techniques to classify human cognitive states based on eye position analysis. By capturing and analyzing the movement and positioning of the eyeball, the system aims to predict cognitive patterns such as attention, focus, and mental engagement. The model is designed to enhance accuracy in cognitive state recognition, providing a foundation for applications in human-computer interaction, assistive technology, and behavioral analysis.",
      type: "Conference",
      publisher: "IEEE Xplore",
      doi:"10.1109/ICCIT60459.2023.10441248",
      year: "2023",
      tags: ["Deep Learning", "CNN", "Image Processing"]
    },    {
      title: "Recyclable Waste Image Classification using Convolutional Neural Networks",
      Collaborators: ["Abu Bakar Fahad","Mithila Farjana", "Dr. Swakkhar Shatabda", "Dr. Dewan Md. Farid"],
      collaboratorLinks: {
        "Abu Bakar Fahad": "https://scholar.google.com/citations?user=RYPoXlYAAAAJ&hl=en",
        "Dr. Swakkhar Shatabda": "https://cse.sds.bracu.ac.bd/faculty_profile/333/dr_swakkhar_shatabda",
        "Dr. Dewan Md. Farid": "https://new.seu.edu.bd/employee/profile/MDAzNDQ1"
      },
      description: "This research introduces an improved approach for classifying recyclable waste using Convolutional Neural Networks (CNNs) in combination with digital image processing techniques. The model is designed to automatically identify and categorize different types of recyclable materials from images, enhancing the efficiency and accuracy of waste segregation. By leveraging deep learning, the system supports smarter waste management practices and contributes to sustainable environmental solutions through automated classification.",
      type: "Conference",
      publisher: "IEEE Xplore",
      doi:"10.1109/ICCIT60459.2023.10441091",
      year: "2023",
      tags: ["Deep Learning", "CNN", "Image Processing"]
    },    {
      title: "Optimized Transformer Architecture for Enhanced Performance and Computational Efficiency in Natural Language Understanding and Generation",
      Collaborators: ["Mr. Nahid Hossain","Mr. Tarek Hasan"],
      collaboratorLinks: {
        "Mr. Nahid Hossain": "https://cse.uiu.ac.bd/faculty/hossain-nahid/",
        "Mr. Tarek Hasan": "https://cse.uiu.ac.bd/faculty/tarek/"
      },
      description: "",
      type: "On Going Research",
  
    }
  ];

  return (
    <section id="research" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Research</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Exploring cutting-edge research in Artificial Intelligence, Machine Learning, Deep Learning, and Computer Vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
          {researchItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <FileText size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>
              </div>              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{item.title}</h3>              {item.Collaborators && item.Collaborators.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Collaborators:</span>{' '}
                    {item.Collaborators.map((collaborator, index) => (
                      <span key={index}>
                        {item.collaboratorLinks && item.collaboratorLinks[collaborator] ? (
                          <a
                            href={item.collaboratorLinks[collaborator]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                          >
                            {collaborator}
                          </a>
                        ) : (
                          <span>{collaborator}</span>
                        )}
                        {index < item.Collaborators.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                </div>
              )}

              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-justify">{item.description}</p>

              {item.tags && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.publisher && (
                <div className="mb-3">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Published in: <span className="font-medium text-slate-700 dark:text-slate-300">{item.publisher}</span>
                  </p>
                </div>
              )}

              {item.doi && (
                <div className="mb-4">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">DOI :  <a 
                    href={item.doi.startsWith('http') ? item.doi : `https://doi.org/${item.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-mono break-all"
                  >
                    {item.doi}
                    <ExternalLink size={14} className="ml-1 flex-shrink-0" />
                  </a></p>
                 
                </div>
              )}

              {item.year && (
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <Calendar size={14} className="mr-2" />
                  <span>{item.year}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
