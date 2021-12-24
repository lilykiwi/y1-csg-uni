
/**
 * The Controller component in the Model/View/Controller framework in this
 * application
 *
 * @see Main
 */
public class Controller {

  /**
   * Main class controls assignment, use this for talking between the different
   * modules
   */
  public Model model;

  /**
   * Main class controls assignment, use this for talking between the different
   * modules
   */
  public View view;

  /**
   * This constructor doesn't really do anything but it's here for debugging if
   * required.
   */
  public Controller() {
    Debug.trace("Controller::<constructor>");
  }

  /**
   * This is how the View talks to the Controller AND how the Controller talks to
   * the Model. This method is called by the View to respond to some user
   * interface event. The controller's job is to decide what to do. In this case
   * it uses a switch statement to select the right method in the Model
   *
   * @param action key string passed in from the button
   */
  public void process(String action) {
    Debug.trace("Controller::process: action = " + action);
    switch (action) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        model.processNumber(action);
        break;
      case "Clr":
        model.processClear();
        break;
      case "Bac":
        model.processBack();
        break;
      case "Ent":
        model.processEnter();
        break;
      case "W/D":
        model.setWithdraw();
        break;
      case "Dep":
        model.setDeposit();
        break;
      case "Bal":
        model.setBalance();
        break;
      case "Fin":
        model.processFinish();
        break;
      case "Sta":
        model.setStatement();
        break;
      default:
        model.processUnknownKey(action);
        break;
    }
  }

}
