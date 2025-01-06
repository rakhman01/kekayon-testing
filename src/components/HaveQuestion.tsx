import ButtonPrimary from "@/shared/ButtonPrimary"
import ButtonSecondary from "@/shared/ButtonSecondary"


const HaveQuestion = () => {
    return (
        <div className="w-full h-60 flex flex-col sm:flex-row justify-between items-center">
            <div>
                <h2 className="text-2xl md:text-4xl font-bold mt-2">
                    Have questions?<br />
                    <span className="text-primary-6000">Let’s talk with us! </span>
                </h2>
            </div>
            <div>
                <ButtonPrimary className="mr-2" >Get Started</ButtonPrimary>
                <ButtonSecondary className="text-primary-6000">Learn More</ButtonSecondary>
            </div>
        </div>
    )
}

export default HaveQuestion