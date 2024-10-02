
import { tools } from './constants';

import { LucideProps } from 'lucide-react';
import AnimationContainer from "./animation-container";
import AnimatedShinyText from '@/components/ui/animated-shiny-text';

interface Props {
    tool: {
        id: number;
        name: string;
        info: string;
        icon: (props: LucideProps) => JSX.Element;
    }
}

const Tools = () => {
    return (
        <div className="relative flex flex-col items-center justify-center py-20">

            <div className="hidden lg:block absolute -translate-x-1/2 rounded-full blur-[10rem] translate-y-1/4 -z-10 left-1/2 top-1/4 w-72 h-60 bg-primary/60"></div>

            <AnimationContainer>
                <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                <AnimatedShinyText className="  inline-flex rounded-full items-center justify-center px-4 py-1 transition ease-out text-3xl font-extrabold text-white/70 hover:text-fuchsia-600 hover:duration-300 hover:dark:text-blue-700">
          <span>JOIN OUR SHEDULING SOFTWARE!!</span>
         
        </AnimatedShinyText>
                    <h2 className="mt-6 text-8xl font-extrabold text-center lg:text-7xl xl:text-8xl text-white">
                        Connect your tools
                    </h2>
                    <p className="max-w-lg mt-6 text-center font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white  to-blue-500/50">
                        Through integrations with tools like instagram, facebook and twitter, you can connect your social media accounts and post directly from your dashboard.
                    </p>
                </div>
            </AnimationContainer>

            <div className="grid w-full max-w-5xl grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 lg:mt-12 bg-transparent">
                {tools.map((tool, idx) => (
                    <AnimationContainer key={tool.id} delay={0.1 * idx + 0.1}>
                        <Item tool={tool} />
                    </AnimationContainer>
                ))}
            </div>

        </div>
    )
};

const Item = ({ tool }: Props) => {
    return (
        <div className="flex flex-col items-start w-full px-5 py-4 bg-transparent tool-shadow bg-opacity-80 border border-purple-700/60 backdrop-blur-md  rounded-xl relative group overflow-hidden">
            <div className="absolute right-8 bottom-0 bg-primaryLight/80 group-hover:opacity-100 opacity-0 transition-opacity w-44 h-12 duration-500 rounded-full blur-[6rem] -z-10"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-lg tool-border">
                <tool.icon className="w-5 h-5 text-foreground" />
            </div>
            <h3 className="mt-4 text-base font-bold">
                {tool.name}
            </h3>
            <p className="mt-2 text-sm text-white/90">
                {tool.info}
            </p>
        </div>
    )
};

export default Tools