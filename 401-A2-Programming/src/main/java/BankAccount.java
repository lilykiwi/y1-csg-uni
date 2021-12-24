import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.time.LocalDate;
import java.util.ArrayList;

/**
 * The object type of a bank account
 */
public class BankAccount {

  /**
   * Value for the number of the account (updated on construction)
   */
  public int accNumber = 0;
  /**
   * Value for the password of the account (updated on construction)
   */
  public int accPasswd = 0;
  /**
   * Value for the money in the account (updated on construction)
   */
  public Long balance = 0L;
  /**
   * History log for the statement feature
   */
  public ArrayList<String> history = new ArrayList<String>();

  /**
   * empty constructor for 0, 0, 0. This shouldn't be utilised as an account
   * number and password of 0 is unsupported..
   */
  public BankAccount() {
  }

  /**
   * Default constructor for the account specifying parameters.
   *
   * @param a Account Number
   * @param p Account Password
   * @param b Balance
   */
  public BankAccount(int a, int p, Long b) {
    accNumber = a;
    accPasswd = p;
    balance = b;
  }

  /**
   * withdraw money from the account. Must be greater than 0 and less than the
   * amount in the account
   *
   * @param amount to withdraw
   *
   * @return true if successful, false if negative or less than the amount in the
   *         account.
   */
  public boolean withdraw(int amount) {
    Debug.trace("BankAccount::withdraw: amount = " + amount);

    if (amount > 0 && balance >= amount) {
      balance -= amount;
      history.add("withdrawn " + formatCurrency(amount) + " on " + LocalDate.now());
      return true;
    } else {
      return false;
    }
  }

  /**
   * deposit the amount of money into the account.
   *
   * @param amount to deposit
   * @return true if successful, false if the amount is negative.
   */
  public boolean deposit(int amount) {
    Debug.trace("LocalBank::deposit: amount = " + amount);

    if (amount > 0) {
      balance += amount;
      history.add("deposited " + formatCurrency(amount) + " on " + LocalDate.now());
      return true;
    } else {
      return false;
    }
  }

  /**
   * @return the ArrayList String for the Statement feature.
   */
  public ArrayList<String> getHistory() {
    return history;
  }

  /**
   * @return the current balance in the account
   */
  public Long getBalance() {
    Debug.trace("LocalBank::getBalance");

    return balance;
  }

  /**
   * Load the locale currency and convert a value to that. Ex 500 = "$5.00"
   *
   * @param l Long to be formatted in the form 50000
   *
   * @return Returns a String similar to the parameter l, only formatted with the
   *         locale currency.
   */
  public String formatCurrency(Long l) {
    NumberFormat dFormat = DecimalFormat.getCurrencyInstance();
    return dFormat.format(l / 100.0);
  }

  /**
   * integer overload for formatCurrency
   *
   * @param i int to be formatted in the form 50000
   *
   * @return Returns a String similar to the parameter i, only formatted with the
   *         locale currency.
   */
  public String formatCurrency(int i) {
    NumberFormat dFormat = DecimalFormat.getCurrencyInstance();
    return dFormat.format(i / 100.0);
  }

  /**
   * String overload for formatCurrency
   *
   * @param s string to be formatted in the form "50000"
   *
   * @return Returns a String similar to the parameter s, only formatted with the
   *         locale currency.
   */
  public String formatCurrency(String s) {
    NumberFormat dFormat = DecimalFormat.getCurrencyInstance();
    return dFormat.format(Integer.parseInt(s) / 100.0);
  }
}
