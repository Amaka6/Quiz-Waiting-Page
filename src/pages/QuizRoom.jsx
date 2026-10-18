import QuizTimer from "../components/QuizTimer";
import Round from "../components/Round";
import Paragraph from "../components/Paragraph";
import PeoplePresent from "../components/PeoplePresent";
import Rules from "../components/Rules";
import CardBlocks from "../components/CardBlocks";
import ActionButtons from "../components/ActionButtons";


function QuizRoom () {
    return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-yellow-100 via-white to-white text-xs">
                <div className="w-full max-w-[540px] min-h-[800px] rounded-[40px] border border-yellow-300 bg-gradient-to-b from-yellow-100 via-white to-yellow-100 px-6 pt-9 pb-8">
                     <div className="flex justify-center">
                        <QuizTimer />
                        </div>
                        <div className="mt-6 flex justify-center">
                        <Round />
                        </div>
                        <Paragraph />
                        <div>
                        <PeoplePresent />
                        </div>
                        <div>
                        <Rules />
                        </div>
                        <CardBlocks />
                        <ActionButtons />


                </div>
            </div>
    );
}

export default QuizRoom;

