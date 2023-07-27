export const appName = 'TiVerse';
export const serviceName = 'TiDb';

export const heroPrimary = 'Unlock the Power of Engagement in Your Events!';
export const heroSecondary = `Experience a new era of event management with ${appName}. An all-improved management workflow experience on ${serviceName}`;

// TODO: update version
export const semanticVersion = 'v1.0.0';

export const demoBlogs = [
  {
    name: 'Databases',
    date: '05/03/2023',
    author: 'Ashutosh Jha',
    wordCount: '887',
    blogPara: [
      'Databases are an integral part of modern software applications, serving as repositories for storing, managing, and organizing data. They provide a structured way to access, update, and delete information efficiently. There are various types of databases based on their data models:',
      '1. Relational Databases (SQL): Relational databases store data in tables with rows and columns. Each row represents a record, and each column represents a data field. They use Structured Query Language (SQL) to manage data and support ACID (Atomicity, Consistency, Isolation, Durability) properties.',
      '2. NoSQL Databases: NoSQL databases are non-relational databases that offer flexible schema design. They can handle large volumes of unstructured or semi-structured data and are often used for big data and real-time applications.',
      '3. Graph Databases: Graph databases are designed to represent and store data in the form of nodes and edges, making them ideal for complex relationships and network-based data.',
      '4. Key-Value Stores: Key-value stores store data as key-value pairs, where the key is unique and used for fast retrieval of values, making them suitable for caching and session management.',
      '5. Document Databases: Document databases store data in JSON or BSON format, enabling storage of nested and hierarchical data structures, commonly used in content management systems and document-oriented applications.',
      'Each type of database has its own strengths and use cases. Depending on the requirements of an application, developers choose the appropriate database type to ensure efficient data management and retrieval.',
    ],
  },
  {
    name: 'System Design',
    date: '05/03/2022',
    author: 'Ashutosh Jha',
    wordCount: 669,
    blogPara: [
      'System Design is a critical phase in the software development process where developers plan and design the architecture of a scalable and reliable system. It involves breaking down a complex problem into smaller components and defining how these components will interact with each other. Key aspects of system design include:',
      '1. Scalability: Ensuring that the system can handle increased loads and user traffic without compromising performance. Techniques like load balancing, caching, and sharding are used to achieve scalability.',
      '2. Reliability: Designing the system to be fault-tolerant and available even in the face of failures. Redundancy, replication, and error handling mechanisms contribute to system reliability.',
      '3. Performance: Optimizing the system to deliver responses quickly and efficiently. This involves reducing latency, optimizing algorithms, and using appropriate data structures.',
      '4. Data Management: Deciding on the database and storage solutions that best fit the system requirements. Choosing between relational and NoSQL databases and caching strategies is crucial for efficient data management.',
      '5. Microservices Architecture: Breaking the system into smaller, loosely-coupled services allows for easier development, deployment, and maintenance. Microservices enable independent scaling and better fault isolation.',
      '6. Security: Implementing robust security measures to protect the system from unauthorized access, data breaches, and other potential threats. This includes authentication, encryption, and access control mechanisms.',
      '7. API Design: Designing clean and intuitive APIs to facilitate communication between different system components. Well-defined APIs promote system interoperability and ease of integration.',
      "System design requires a deep understanding of the application's requirements, anticipated user base, and future growth. It is an iterative process where architects continuously refine the design based on feedback and changing needs.",
    ],
  },
];

export const demoEvents = [
  {
    id: 0,
    name: 'TiDb Conf',
    organizer: 'PingCAP',
    description:
      'TiDb Conf is one of the largest event focusing on TiDb and PingCAP in India',
    maxLimit: 2000,
    status: 'upcoming',
  },
  {
    id: 1,
    name: 'Vercel Conf',
    organizer: 'Vercel Inc.',
    description:
      'Vercel Conf is one of the best events for developers to deepdive into vercel ecosystem',
    maxLimit: 2000,
    status: 'upcoming',
  },
  {
    id: 2,
    name: 'JsConf Bengaluru',
    organizer: 'JsConf Foundation',
    description: 'JsConf is the largest JavaScript Conference ind India',
    maxLimit: 2000,
    status: 'expired',
  },
];

export const demoUser = {
  name: 'Guest User',
  email: 'guest@guest.com',
};
