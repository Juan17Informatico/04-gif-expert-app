import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
    test("debe hacer match con el snapshot", () => {
        const container = render(<GifExpertApp />);
        // screen.debug();

        expect(container).toMatchSnapshot();
    });

    test( '' , () => {

    });
});
