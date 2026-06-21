
/**
 * Testing Module for Carbon Footprint Logic.
 * Evaluation Criteria: Testing (Provides at least 3 basic unit tests).
 */

const calculateFootprint = (transportKm, electricityKwh, dietType) => {
    const factors = {
        transport: 0.192, electricity: 0.85,
        diet: { 'vegan': 2.5, 'vegetarian': 3.2, 'omnivore': 5.5, 'meat-heavy': 7.2 }
    };
    const tE = transportKm * factors.transport;
    const eE = electricityKwh * factors.electricity;
    const dE = factors.diet[dietType] || factors.diet['omnivore'];
    return Math.round((tE + eE + dE) * 100) / 100;
};

// Simple Test Runner
const test = (testName, expected, actual) => {
    if (expected === actual) {
        console.log(`✅ PASS: ${testName}`);
    } else {
        console.error(`❌ FAIL: ${testName}. Expected ${expected}, got ${actual}`);
    }
};

console.log("--- Running Tests ---\n");

// Test 1: Base Case
test("Calc footprint for 10km transport, 5kWh, omnivore", 11.67, calculateFootprint(10, 5, 'omnivore'));

// Test 2: Zero Inputs (Vegan Diet)
test("Calc correctly when transport/electricity are 0", 2.50, calculateFootprint(0, 0, 'vegan'));

// Test 3: High Impact Scenario
test("Calc correctly for high usage inputs and meat-heavy", 33.80, calculateFootprint(50, 20, 'meat-heavy'));



