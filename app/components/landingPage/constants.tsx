import Icons  from "./ui/icons";
import { Activity, BarChart2, BarChart3, BarChartBig, CalendarClock, Captions, Fullscreen, HandHeart, HeartHandshake, Image, Languages, LineChart, NotebookPen, Recycle, Smile, TrendingUp, Users, Zap } from "lucide-react";

export const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export const badges = [
    {
        id: 1,
        title: "Analytics Insights",
        icon: LineChart,
    },
    {
        id: 2,
        title: "Content Creation",
        icon: NotebookPen,
    },
    {
        id: 3,
        title: "Audience Engagement",
        icon: Users,
    },
    {
        id: 4,
        title: "Community Management",
        icon: HeartHandshake,
    },
    {
        id: 5,
        title: "Brand Monitoring",
        icon: Activity,
    },
    {
        id: 6,
        title: "Performance Reports",
        icon: BarChart3,
    },
    {
        id: 7,
        title: "Content Scheduling",
        icon: CalendarClock,
    },
    {
        id: 8,
        title: "User Feedback",
        icon: HandHeart,
    },
    {
        id: 9,
        title: "Custom Integrations",
        icon: Zap,
    },
    {
        id: 10,
        title: "Content Optimization",
        icon: TrendingUp,
    }
];

export const features = [
    {
        id: 1,
        title: "Caption Generation",
        description: "Automatically generate captions for your images using our AI-powered caption generation tool.",
        icon: Captions,
    },
    {
        id: 2,
        title: "Post Scheduling",
        description: "Schedule your posts to be published at a later date and time to maximize engagement.",
        icon: CalendarClock,
    },
    {
        id: 3,
        title: "Analytics and Insights",
        description: "Track the performance of your posts and get insights to optimize your content strategy.",
        icon: LineChart,
    },
    {
        id: 4,
        title: "Image Generation",
        description: "Create stunning images for your posts using our AI-powered image generation tool.",
        icon: Image,
    },
];

export const offerings = [
    {
        id: 1,
        title: "Trend Prediction",
        description: "Utilize AI algorithms to predict emerging trends and optimize your content strategy.",
        icon: BarChart2
    },
    {
        id: 2,
        title: "Emoji Analysis",
        description: "Analyze the effectiveness of emojis in your posts and optimize their usage.",
        icon: Smile
    },
    {
        id: 3,
        title: "Content Recycling",
        description: "Automatically recycle evergreen content to maintain a consistent posting schedule.",
        icon: Recycle
    },
    {
        id: 4,
        title: "Sentiment Analysis",
        description: "Monitor audience sentiment towards your brand and respond to feedback in real-time.",
        icon: BarChartBig
    },
    {
        id: 5,
        title: "Image Recognition",
        description: "Leverage AI-powered image recognition to automatically tag and categorize your images.",
        icon: Fullscreen
    },
    {
        id: 6,
        title: "Multi-Language Support",
        description: "Translate and localize your content into multiple languages for global reach.",
        icon: Languages
    },
];

export const plans = [
    {
        id: 1,
        title: "Free",
        priceMonthly: "$0",
        priceYearly: "$0",
        buttonText: "Get Started for Free",
        features: [
            "AI-Powered Caption Generation",
            "Multi-Platform Publishing",
            "Content Calendar",
            "Basic Analytics Insights",
            // "Limited Content Recycling"
        ]
    },
    {
        id: 2,
        title: "Standard",
        priceMonthly: "$99",
        priceYearly: "$999",
        buttonText: "Upgrade to Standard",
        features: [
            "AI-Powered Caption Generation",
            "Multi-Platform Publishing",
            "Content Calendar",
            "Advanced Analytics Insights",
            // "Enhanced Content Recycling"
        ]
    },
    {
        id: 3,
        title: "Premium",
        priceMonthly: "$199",
        priceYearly: "$1990",
        buttonText: "Upgrade to Premium",
        features: [
            "AI-Powered Caption Generation",
            "Multi-Platform Publishing",
            "Content Calendar",
            "Tailored Analytics Insights",
            // "Unlimited Content Recycling"
        ]
    }
];

export const testimonials = [
    {
        name: "John Doe",
        username: "@john_doe",
        review: "Amazing tool! It has greatly improved our social media presence."
    },
    {
        name: "Jane Smith",
        username: "@jane_smith",
        review: "Caps AI has made managing our social media accounts a breeze!"
    },
    {
        name: "Alex Johnson",
        username: "@alex_johnson",
        review: "Incredible features! The AI-powered caption generator is a game-changer."
    },
    {
        name: "Emily Brown",
        username: "@emily_brown",
        review: "Highly recommend CapsAI for anyone looking to streamline their social media."
    },
    {
        name: "Michael Wilson",
        username: "@michael_wilson",
        review: "Effortlessly schedule posts across multiple platforms with Caps AI."
    },
    {
        name: "Jessica Garcia",
        username: "@jessica_garcia",
        review: "The analytics insights provided by Caps AI have been invaluable."
    },
    {
        name: "David Martinez",
        username: "@david_martinez",
        review: "Caps AI has saved us so much time with its automated features."
    },
    {
        name: "Sophia Rodriguez",
        username: "@sophia_rodriguez",
        review: "Love the user-friendly interface, powerful capabilities of AI."
    },
    {
        name: "William Lee",
        username: "@william_lee",
        review: "Excellent customer support and a fantastic tool overall."
    },
    {
        name: "Olivia Taylor",
        username: "@olivia_taylor",
        review: "Caps AI has helped us reach a wider audience and grow our following."
    },
    {
        name: "Ethan Anderson",
        username: "@ethan_anderson",
        review: "Simply the best social media management tool out there. Period."
    },
    {
        name: "Emma White",
        username: "@emma_white",
        review: "Caps AI has exceeded our expectations. It's a must-have for any business."
    }
];

export const tools = [
    {
        id: 1,
        name: "Instagram",
        info: "Optimize your presence with Caps AI.",
        icon: Icons.tool1
    },
    {
        id: 2,
        name: "Facebook",
        info: "Connect your audience on Facebook.",
        icon: Icons.tool2
    },
    {
        id: 3,
        name: "Twitter",
        info: "Join the conversation on Twitter.",
        icon: Icons.tool3
    },
    {
        id: 4,
        name: "LinkedIn",
        info: "Build your network on LinkedIn.",
        icon: Icons.tool4
    },
    {
        id: 5,
        name: "Pinterest",
        info: "Discover new ideas on Pinterest.",
        icon: Icons.tool5
    },
    {
        id: 6,
        name: "YouTube",
        info: "Share your videos on YouTube.",
        icon: Icons.tool6
    },
];

export const links = [
    {
        name: "Home",
        hash: "/",
    },
    {
        name: "About",
        hash: "/about",
    },
    {
        name: "Projects",
        hash: "/projects",
    },
    {
        name: "Blog",
        hash: "/blog",
    },
    {
        name: "Contact",
        hash: "/contact",
    },
] as const;