import hrhr from "../assets/images/11.png";
import CastleBots from "../assets/images/CastleBots.png";
import CastleServices from "../assets/images/CastleServices.png";
import Fisherman from "../assets/images/Fisherman.png";
import Ecommerce from "../assets/images/Ecommerce.png";
import Coffee from "../assets/images/Coffee.png";
import aankhijhyal from "../assets/images/aankhijhyal.png";
import Recommendation from "../assets/images/Recommendation.png";
import TMA from "../assets/images/TMA.png";
import PFT from "../assets/images/PFT.png";

export const projects = [
  {
    id: 1,
    title: "Castle Bots",
    company: "Aankhijhyal Technologies",
    companyImg: aankhijhyal,
    role: "Full Stack Developer (Team Contribution)",
    description:
      "A platform showcasing various Discord bots and selling them as packages or subscriptions to individual users or corporates. Users or companies could deploy these bots on their own Discord servers. Payments were integrated with Solana crypto.",
    stack: ["React", "Node.js", "Discord.js", "Solana"],
    technologiesUsed: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "TypeScript", icon: "fab fa-js-square", color: "#3178C6" }, // JS-square for TS
      { name: "Vite", icon: "fa fa-bolt", color: "#646CFF" }, // Vite icon approximation
      { name: "Discord.js", icon: "fab fa-discord", color: "#5865F2" },
      { name: "MySQL", icon: "fas fa-database", color: "#00758F" },
      { name: "Redis", icon: "fas fa-database", color: "#DC382D" },
      { name: "Solana", icon: "fa fa-coins", color: "#00FFA3" },
    ],

    contributions: [
      "Created custom Discord bots for different functionalities.",
      "Developed front-end using React with responsive UI.",
      "Integrated Solana payments for subscriptions and packages.",
      "Enabled bots to be deployed on user or corporate Discord servers.",
    ],
    type: "corporate",
    image: CastleBots,
  },

  {
    id: 2,
    title: "FISHERMAN",
    company: "Aankhijhyal Technologies",
    companyImg: aankhijhyal,
    role: "Full Stack Developer (Team Contribution)",
    description:
      "A crypto-based betting game where users place bets in Solana. The UI simulates a fishing game, and users receive rewards based on the fish caught. Higher bets increase chances of getting higher rewards.",
    stack: ["React", "Node.js", "Solana"],
    technologiesUsed: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "TypeScript", icon: "fab fa-js-square", color: "#3178C6" }, // JS-square for TS
      { name: "Vite", icon: "fa fa-bolt", color: "#646CFF" }, // Vite icon approximation
      { name: "MySQL", icon: "fas fa-database", color: "#00758F" },
      { name: "Redis", icon: "fas fa-database", color: "#DC382D" },
      { name: "Solana", icon: "fa fa-coins", color: "#00FFA3" },
    ],
    contributions: [
      "Developed backend logic for managing bets and rewards",
      "Integrated Solana blockchain payments for secure transactions",
      "Implemented game logic and user authentication",
      "Created dashboards for admin and user tracking",
    ],
    type: "corporate",
    image: Fisherman,
  },

  {
    id: 3,
    title: "CASTLE SERVICES",
    company: "Aankhijhyal Technologies",
    companyImg: aankhijhyal,
    role: "Full Stack Developer (Team Contribution)",
    description:
      "A service-selling website offering Web3 services to users. Focused on intuitive UI and admin dashboard functionalities.",
    stack: ["React", "Node.js", "Socket.io", "Express"],
    technologiesUsed: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "TypeScript", icon: "fab fa-js-square", color: "#3178C6" }, // JS-square for TS
      { name: "Vite", icon: "fa fa-bolt", color: "#646CFF" }, // Vite icon approximation
      { name: "Socket.io", icon: "fas fa-sitemap", color: "#010101" },
      { name: "MySQL", icon: "fas fa-database", color: "#00758F" },
      { name: "Redis", icon: "fas fa-database", color: "#DC382D" },
      { name: "Solana", icon: "fa fa-coins", color: "#00FFA3" },
    ],
    contributions: [
      "Designed and implemented UI components for users and admins",
      "Developed admin dashboard functionalities for managing services and users",
      "Integrated service booking and management system",
      "Optimized website performance and SEO",
    ],
    type: "corporate",
    image: CastleServices,
  },

  {
    id: 4,
    title: "Multi-Vendor eCommerce Platform",
    description:
      "Built a full-featured eCommerce platform with vendor dashboards, product catalog, and secure payment integration. Vendors can register, add products, manage orders, and track sales. Features include search, filters, and user authentication.",
    stack: ["React", "Node.js"],
    technologiesUsed: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "MySql", icon: "fas fa-database", color: "#47A248" },
      { name: "Khalti", icon: "fas fa-credit-card", color: "#635BFF" },
      { name: "JWT", icon: "fas fa-key", color: "#F7DF1E" },
    ],
    contributions: [
      "Vendor registration and dashboards",
      "Product catalog with search and filters",
      "Secure payment integration with Khalti",
      "Order management and sales tracking",
      "User authentication with JWT",
    ],
    type: "personal",
    image: Ecommerce,
  },

  {
    id: 5,
    title: "Second-Hand Marketplace",
    description:
      "Developed an online platform for buying and selling second-hand products. Users can list items, browse categories, and securely communicate with buyers and sellers. Includes user authentication and search filters.",
    stack: ["React", "Node.js"],
    technologiesUsed: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "MySql", icon: "fas fa-database", color: "#47A248" },
      { name: "JWT", icon: "fa fa-key", color: "#F7DF1E" },
      { name: "Socket.io", icon: "fa fa-sitemap", color: "#010101" },
    ],
    contributions: [
      "User item listings with images",
      "Category-based browsing",
      "Real-time messaging with Socket.io",
      "Search filters for quick discovery",
      "JWT-based secure authentication",
    ],
    type: "personal",
    image: hrhr,
  },

  {
    id: 6,
    title: "Coffee Shop Management",
    description:
      "Developed a staff-facing system for a coffee shop to efficiently handle customer orders, manage subscriptions and memberships, and track inventory. Simplifies daily operations and improves order accuracy and speed.",
    stack: ["React", "Node.js"],
    technologiesUsed: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "MySql", icon: "fas fa-database", color: "#47A248" },
      { name: "JWT", icon: "fa fa-key", color: "#F7DF1E" },
    ],
    contributions: [
      "Order management for staff",
      "Subscription and membership tracking",
      "Inventory management dashboard",
      "Secure staff login using JWT",
      "Improved order accuracy and speed",
    ],
    type: "personal",
    image: Coffee,
  },

  {
    id: 7,
    title: "Personal Finance Tracker",
    description:
      "Built a finance tracking application that helps users manage expenses, income, and budgets. Features include transaction categorization, monthly summaries, and visual dashboards for financial insights.",
    stack: ["React", "Node.js"],
    technologiesUsed: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "Chart.js", icon: "fa fa-chart-bar", color: "#FF6384" },
      { name: "MySql", icon: "fa fa-database", color: "#47A248" },
    ],
    contributions: [
      "Expense and income tracking",
      "Transaction categorization",
      "Monthly summaries and reports",
      "Interactive dashboards using Chart.js",
      "Budget management tools",
    ],
    type: "personal",
    image: PFT,
  },

  {
    id: 8,
    title: "Book Recommendation System",
    description:
      "Created a book recommendation system using Python, leveraging machine learning algorithms to suggest books based on user preferences. Integrated data analysis and visualization for enhanced insights.",
    stack: ["Python", "NumPy", "Scikit-learn"],
    technologiesUsed: [
      { name: "Python", icon: "fab fa-python", color: "#3776AB" },
      { name: "NumPy", icon: "fa fa-code", color: "#013243" },
      { name: "Scikit-learn", icon: "fa fa-robot", color: "#F7931E" },
      { name: "Pandas", icon: "fa fa-table", color: "#150458" },
      { name: "Matplotlib", icon: "fa fa-chart-bar", color: "#FF6600" },
    ],
    contributions: [
      "Machine learning-based recommendations",
      "Data preprocessing using NumPy and Pandas",
      "Model building with Scikit-learn",
      "Visualization with Matplotlib",
      "Personalized book suggestions",
    ],
    type: "personal",
    image: Recommendation,
  },

  {
    id: 9,
    title: "Task Management System",
    description:
      "Developed a task management app to organize personal and team tasks. Features include task creation, status tracking, priority labeling, and deadline reminders, with a responsive and user-friendly interface.",
    stack: ["React", "Node.js"],
    technologiesUsed: [
      { name: "React", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "MySql", icon: "fas fa-database", color: "#47A248" },
      { name: "JWT", icon: "fa fa-key", color: "#F7DF1E" },
      { name: "Socket.io", icon: "fa fa-sitemap", color: "#010101" },
    ],
    contributions: [
      "Task creation and assignment",
      "Status tracking and priority labels",
      "Deadline reminders",
      "Real-time updates using Socket.io",
      "Secure authentication with JWT",
    ],
    type: "personal",
    image: TMA,
  },
];
