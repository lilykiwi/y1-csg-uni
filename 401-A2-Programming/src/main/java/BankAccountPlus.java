import java.time.LocalDate;

/**
 * The object type of a bank account
 */
public class BankAccountPlus extends BankAccount {

  /**
   * Negative limit for the account. Positive value means negative limit. i.e.
   * 50000 is a $-500.00 limit on the account.
   */
  private Long overdraftLimit;

  /**
   * empty constructor for 0, 0, 0, 0. This shouldn't be utilised as an account
   * number and password of 0 is unsupported..
   */
  public BankAccountPlus() {
  }

  /**
   * Default constructor for the account specifying parameters.
   *
   * @param a Account Number
   * @param p Account Password
   * @param b Balance
   * @param o Overdraft Limit (positive values become negative)
   */
  public BankAccountPlus(int a, int p, Long b, Long o) {
    accNumber = a;
    accPasswd = p;
    balance = b;
    overdraftLimit = o;
  }

  /**
   * withdraw money from the account. Must be greater than 0 and less than the
   * amount in the account plus the overdraft limit.
   *
   * @param amount to withdraw
   * @return true if successful, false if negative or less than the amount in the
   *         account.
   */
  public boolean withdraw(int amount) {
    Debug.trace("BankAccount::withdraw: amount = " + amount);

    Debug.trace("BankAccount::withdraw: balance = " + balance);
    Debug.trace("BankAccount::withdraw: overdraftLimit = " + overdraftLimit);

    if (amount > 0 && (balance + overdraftLimit) >= amount) {
      balance -= amount;
      history.add("withdrawn " + formatCurrency(amount) + " on " + LocalDate.now());
      return true;
    } else {
      return false;
    }
  }

  /**
   * get function for the overdraft limit, returns a Long value.
   *
   * @return returns the value of the overdraftLimit variable
   */
  public Long getOverdraftLimit() {
    return overdraftLimit;
  }

  /**
   * integer version of overdraft limit get function.
   *
   * @return returns the value of the overdraftLimit variable
   */
  public int getOverdraftLimitInteger() {
    return overdraftLimit.intValue();
  }

  /**
   * Set function for the overdraft limit. This sets the value of the private
   * variable.
   *
   * @param l Long value of the new limit
   * @return true if successful, false if unchanged
   */
  public boolean setOverdraftLimit(Long l) {
    if (overdraftLimit != l) {
      // set the new limit and return true
      overdraftLimit = l;
      return true;
    } else {
      // unchanged (as it's the same), so return false
      return false;
    }
  }
}
