import static org.junit.Assert.*;
import org.junit.Test;

public class CalculatorTest {
  @Test
  public void testAdd1() // 1st test
  {
    Calculator calculator = new Calculator(); // creating a new object to be tested
    double result = calculator.add(10, 50); // try adding 50 to 10
    assertEquals(60, result, 0); // assertEquals() is used to check the testing result
  }

  @Test
  public void testAdd2() // 2nd test
  {
    Calculator calculator = new Calculator();
    double result = calculator.add(7.5, 1.5);
    assertEquals(9.0, result, 0);
  }
}
