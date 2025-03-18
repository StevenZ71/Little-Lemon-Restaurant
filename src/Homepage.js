import LittleLemonPreview from "./LittleLemonPreview.js";
import SpecialsSection from "./SpecialsSection.js";
import TestimonialsSection from "./TestimonialsSection.js";
import AboutSection from "./AboutSection.js";

export default function Homepage(){
    return(
        <>
            <LittleLemonPreview />
            <SpecialsSection />
            <TestimonialsSection />
            <AboutSection />
        </>
    )
}