import "mocha";

import Greater from "../src/index";
import { assert, expect, should } from "chai";

should();

describe("a unit test", () => {
    it("is self aware", () => {
        // Arrange
        const greater = new Greater();
        const expected = "Hello world";

        // Act
        return greater.greet().then(actual => {

            // Assert
            actual.should.equal(expected);
            assert.equal(actual, expected);
            expect(actual).to.equal(expected);

        });
    });
});
