import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Newsletter = () => {
    return (
        <div className="flex flex-col relative items-center justify-center mx-auto max-w-5xl w-full py-20 mb-96">

            <div className="flex flex-col md:flex-row items-end justify-between w-full py-5 lg:py-8">
                <div className="flex flex-col items-start max-w-lg">
                    <h2 className="text-2xl font-semibold text-center md:text-start lg:text-3xl xl:text-4xl">
                        Get exclusive{" "}
                        <span className="text-primary">
                            discount{" "}
                        </span>
                        on your first purchase
                    </h2>
                    <p className="mt-6 text-center md:text-start text-muted-foreground">
                        Subscribe to newsletter to receive exclusive updates and offers.
                    </p>
                </div>
                <div className="flex items-center justify-end mt-6 max-w-md">
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 pr-28 py-2 text-sm rounded-md text-muted-foreground"
                    />
                    <Button variant="default" className="ml-2 absolute rounded-sm right-1 h-8">
                        Subscribe
                    </Button>
                </div>
            </div>

        </div>
    )
};
export default Newsletter