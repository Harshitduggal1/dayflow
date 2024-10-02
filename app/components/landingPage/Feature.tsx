"use client";

import { badges, features } from './constants';
import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Icons from './ui/icons';
import AnimationContainer from "./animation-container";
import Images from "./ui/images";

interface ItemProps {
    title: string;
    icon: LucideIcon;
}

interface FeatureProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const Featuress = () => {
    return (
        <div className="relative flex flex-col items-center justify-center py-20">

            <div className="absolute -top-1/10 -left-1/5 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <AnimationContainer delay={0.5}>
                <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                    <Badge variant="outline">
                        <Icons.bolt className="w-4 h-4" />
                        <span className="ml-2 text-sm">
                            AI-Powered Features
                        </span>
                    </Badge>
                    <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                        Innovative features for even more convenience
                    </h2>
                    <p className="max-w-lg mt-6 text-center text-white font-extrabold">
                        Our platform is packed with innovative features to help you get the most out of your experience.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2}>
                <div className="flex flex-col items-center justify-center max-w-5xl mx-auto mt-8 overflow-x-hidden lg:mt-10 mask-2">
                    <div className="flex-wrap items-center justify-center hidden w-full gap-4 lg:flex lg:gap-8 lg:ml-40">
                        {badges.slice(0, 5).map((badge) => (
                            <Item key={badge.id} title={badge.title} icon={badge.icon} />
                        ))}
                    </div>
                    <div className="flex-wrap items-center justify-center hidden w-full gap-4 mt-4 lg:flex lg:gap-8">
                        {badges.slice(5).map((badge) => (
                            <Item key={badge.id} title={badge.title} icon={badge.icon} />
                        ))}
                    </div>
                    <div className="relative flex max-w-xs gap-4 mx-auto mt-4 overflow-x-hidden sm:max-w-sm md:max-w-md lg:hidden">
                        <div className="flex gap-4 animate-marquee whitespace-nowrap">
                            {badges.map((badge) => (
                                <Item key={badge.id} title={badge.title} icon={badge.icon} />
                            ))}
                        </div>
                        <div className="absolute top-0 flex gap-4 ml-4 animate-marquee2 whitespace-nowrap">
                            {badges.map((badge) => (
                                <Item key={badge.id} title={badge.title} icon={badge.icon} />
                            ))}
                        </div>
                    </div>
                </div>
            </AnimationContainer>

            <div className="relative flex flex-col items-center justify-center w-full h-full mt-8">
                <AnimationContainer delay={0.25}>
                    <div className="items-center justify-center hidden w-full lg:flex">
                        <div className="relative flex max-w-4xl">
                            <div className="absolute h-full pointer-events-none inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
                            <Images.grad className="w-full h-[650px]" />
                        </div>
                    </div>
                </AnimationContainer>
                <div className="relative inset-0 z-20 flex flex-col items-center justify-center w-full lg:absolute lg:px-20">
                    <div className="grid w-full grid-cols-1 gap-10 mt-20 md:grid-cols-2 md:gap-20">
                        <div className="flex flex-col items-center justify-start w-full gap-10 md:gap-20 md:justify-center">
                            {features.slice(0, 2).map((feature, idx) => (
                                <AnimationContainer key={idx} delay={0.1 * idx}>
                                    <Feature
                                        key={feature.id}
                                        title={feature.title}
                                        description={feature.description}
                                        icon={feature.icon}
                                    />
                                </AnimationContainer>
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-10 md:gap-20 md:justify-center">
                            {features.slice(2).map((feature, idx) => (
                                <AnimationContainer key={idx} delay={0.1 * idx}>
                                    <Feature
                                        key={feature.id}
                                        title={feature.title}
                                        description={feature.description}
                                        icon={feature.icon}
                                    />
                                </AnimationContainer>
                            ))}
                        </div>
                    </div>
                    <div className="bottom-0 flex items-center w-full mt-20 justify-evenly lg:mt-auto">
                        <AnimationContainer delay={0.3} className="flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-transparent md:text-4xl bg-gradient-to-b from-emerald-600 to-lime-400 bg-clip-text">
                                40.9k
                            </h3>
                            <span className="text-sm text-muted-foreground text-white ">
                                Teams
                            </span>
                        </AnimationContainer>
                        <AnimationContainer delay={0.35} className="flex flex-col items-center">
                            <h3 className="text-2xl font-medium text-transparent md:text-4xl bg-gradient-to-b from-emerald-600 to-lime-400 bg-clip-text">
                                21.2k
                            </h3>
                            <span className="text-sm text-muted-foreground">
                                Users
                            </span>
                        </AnimationContainer>
                        <AnimationContainer delay={0.4} className="flex flex-col items-center">
                            <h3 className="text-2xl font-medium text-transparent md:text-4xl bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text">
                                10.5k
                            </h3>
                            <span className="text-sm text-muted-foreground">
                                Projects
                            </span>
                        </AnimationContainer>
                    </div>
                </div>
            </div>

        </div>
    )
};
const Item = ({ title, icon: Icon }: ItemProps) => {
    return (
        <div className="flex flex-col items-center justify-center select-none">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 border rounded-sm bg-primary/20 border-primary">
                    <Icon className="w-3 h-3 text-neutral-50" />
                </div>
                <span className="text-sm font-normal text-neutral-100">
                    {title}
                </span>
            </div>
        </div>
    )
};

const Feature = ({ title, description, icon: Icon, }: FeatureProps) => {
    return (
        <div className="flex flex-col items-start justify-start w-full p-4 md:items-center md:justify-center opacity-70 md:p-0 hover:opacity-100">
            <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-primary/20 border-primary">
                <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="mt-5 text-base font-medium text-neutral-100">
                {title}
            </span>
            <p className="max-w-xs mt-2 text-sm text-muted-foreground text-start md:text-center">
                {description}
            </p>
        </div>
    )
};

export default Featuress