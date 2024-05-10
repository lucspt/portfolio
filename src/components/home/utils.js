import { containerWidth } from "../../constants";

export const disabledOrEnableSlider = (slider, numProjects) => {
    const numSlides = slider.options.slides.perView;
    if (Math.min(window.innerWidth, containerWidth) / numSlides >= numProjects) {
      slider.update({ disabled: true })
    } else {
      slider.update({ disabled: false });
    }
}