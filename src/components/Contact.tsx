
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Official Email",
      value: "syedeftasumalam.cse@diu.edu.bd",
      link: "mailto:syedeftasumalam.cse@diu.edu.bd"
    },
    {
      icon: Mail,
      title: "Personal Email",
      value: "syed.efta@gmail.com",
      link: "mailto:syed.efta@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+8801624830751",
      link: "tel:+8801624830751"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Daffodil International University, Dhaka, Bangladesh",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or academic partnerships
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 text-center">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <item.icon size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                      <p className="text-slate-600 dark:text-slate-300">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md mx-auto max-w-md">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 text-center">Office Hours</h4>
              <div className="space-y-2 text-slate-600 dark:text-slate-300 text-center">
                <p><span className="font-medium">Saturday - Wednesday:</span> 9:00 AM - 4:00 PM</p>
                <p><span className="font-medium">Thursday - Friday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
