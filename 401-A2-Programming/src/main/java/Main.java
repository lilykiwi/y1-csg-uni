import javafx.application.Application;
import javafx.stage.Stage;

/**
 * Main class which instantiates the other classes and links them together.
 * Entry point for the project.
 *
 * @see Model
 * @see View
 * @see Controller
 */
public class Main extends Application {

  /**
   * Entry point for command line, skipped over when started with BlueJ or Gradle
   *
   * @param args command line arguments
   */
  public static void main(String[] args) {
    launch(args);
  }

  /**
   * Initialises the model, view and controller objects. Also sets up the window
   * and initialises the model. Sets up two accounts, one with the login 10001,
   * 11111 and another with the login 10002, 22222.
   *
   * @param window Stage utilised for window rendering
   */
  public void start(Stage window) {
    // set up debugging and print initial debugging message
    Debug.set(true);
    Debug.trace("atm starting");
    Debug.trace("Main::start");

    // Create a Bank object for this ATM
    Bank b = new Bank();
    // add some test bank accounts
    b.addBankAccount(10001, 11111, 10000L, "BankAccount");
    b.addBankAccount(10002, 22222, 5000L, "BankAccount");

    // add some accounts with overdraft limits
    b.addBankAccount(91820, 38209, 133700L, "BankAccountPlus", 10000L);
    b.addBankAccount(382911, 532824, -50000L, "BankAccountPlus", 50000L);

    // Create the Model, View and Controller objects
    Model model = new Model(b); // the model needs the Bank object to 'talk to' the bank
    View view = new View();
    Controller controller = new Controller();

    // Link them together so they can talk to each other
    // Each one has instances variable for the other two
    model.view = view;
    model.controller = controller;

    controller.model = model;
    controller.view = view;

    view.model = model;
    view.controller = controller;

    // start up the GUI (view), and then tell the model to initialise and display
    // itself
    view.start(window);
    model.initialise("Welcome to the ATM");
    model.display();

    // application is now running
    Debug.trace("atm running");
  }
}
