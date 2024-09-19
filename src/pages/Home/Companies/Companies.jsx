import { TfiEmail } from "react-icons/tfi";

const Companies = () => {
    return (
        <section className="brand-wrapper bg-[#f3f2ed] py-10">
            <div className="container mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-5">
                <div className="sign-content flex items-center justify-center space-x-3 text-secondary">
                    <TfiEmail className="text-4xl text-primary"/>
                    <h4 className="font-robo text-4xl font-semibold ">Sign Up For Newsletter</h4>
                </div>{/* sign-content */}
                <div className="sign-form">
                    <form className="flex items-end border-b border-gray-300 pb-2">
                        <div className="w-full">
                            <input
                                type="email"
                                id="email"
                                className="input w-full border-none focus:outline-none rounded-none bg-transparent"
                                placeholder="Your email address"
                                required
                            />
                        </div>
                        <button type="submit" className="cc-btn ml-4">
                            Subscribe
                        </button>
                    </form>
                </div>{/* sign-form */}

            </div>{/* container */}
        </section>/* brand - wrapper */
    );
};

export default Companies;