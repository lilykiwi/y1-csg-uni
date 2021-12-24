// The View class creates and manages the GUI for the application.
// It doesn't know anything about the ATM itself, it just displays
// the current state of the Model, (title, output1 and output2),
// and handles user input from the buttons and handles user input

// We import lots of JavaFX libraries (we may not use them all, but it
// saves us having to think about them if we add new code)

import javafx.event.ActionEvent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.scene.text.*;
import javafx.stage.Stage;

/**
 * The View component in the Model/View/Controller framework in this application
 *
 * @see Main
 */
public class View {
  int H = 500; // Height of window pixels
  int W = 500; // Width of window pixels

  // variables for components of the user interface
  Label title; // Title area (not the window title)
  TextField message; // Message area, where numbers appear
  TextArea reply; // Reply area where results or info are shown

  ScrollPane scrollPane; // scrollbars around the TextArea object
  GridPane grid; // main layout grid
  TilePane buttonPane; // tiled area for buttons

  // The other parts of the model-view-controller setup
  public Model model;
  public Controller controller;

  /**
   * Constructor method that prints a debug message (if required).
   */
  public View() {
    Debug.trace("View::<constructor>");
  }

  /**
   * start is called from Main, to start the GUI up. Note that it is important to
   * create controls etc here and not in the constructor (or as initialisations to
   * instance variables), because we need things to be initialised in the right
   * order
   *
   * @param window Stage window passed in from Main
   */
  public void start(Stage window) {
    Debug.trace("View::start");

    // create the user interface component objects
    // The ATM is a vertical grid of four components -
    // label, two text boxes, and a tiled panel
    // of buttons

    // layout objects
    grid = new GridPane();
    grid.setId("Layout"); // assign an id to be used in css file
    buttonPane = new TilePane();
    buttonPane.setId("Buttons"); // assign an id to be used in css file

    // controls
    title = new Label(); // Message bar at the top for the title
    grid.add(title, 0, 0); // Add to GUI at the top

    message = new TextField(); // text field for numbers and error messages
    message.getStyleClass().add("TextField");
    message.setEditable(false); // Read only (user can't type in)
    grid.add(message, 0, 1); // Add to GUI on second row

    reply = new TextArea(); // multi-line text area for instructions
    reply.getStyleClass().add("TextArea");
    reply.setEditable(false); // Read only (user can't type in)
    // scrollPane = new ScrollPane(); // create a scrolling window
    // scrollPane.getStyleClass().add("ScrollPane");
    // scrollPane.setContent(reply); // put the text area 'inside' the scrolling
    // window
    grid.add(reply, 0, 2); // add the scrolling window to GUI on third row

    // Buttons - these are laid out on a tiled pane, then
    // the whole pane is added to the main grid as the fourth row

    // Button labels - empty strings are for blank spaces
    // The number of button per row should match what is set in
    // the css file
    String[][] labels = { { "7", "8", "9", "", "Dep", "W/D" }, { "4", "5", "6", "", "Bal", "Sta" },
        { "1", "2", "3", "", "", "" }, { "Clr", "0", "Bac", "", "Fin", "Ent" } };

    // loop through the array, making a Button object for each label
    // (and an empty text label for each blank space) and adding them to the
    // buttonPane
    // The number of button per row is set in the css file, not the array.
    for (String[] row : labels) {
      for (String label : row) {
        if (label.length() >= 1) {
          // non-empty string - make a button
          Button b = new Button(label);
          b.setOnAction(this::buttonClicked); // set the method to call when pressed
          buttonPane.getChildren().add(b); // and add to tiled pane
        } else {
          // empty string - add an empty text element as a spacer
          buttonPane.getChildren().add(new Text());

        }
      }
    }
    grid.add(buttonPane, 0, 3); // add the tiled pane of buttons to the grid

    // add the complete GUI to the window and display it
    Scene scene = new Scene(grid, W, H);
    scene.getStylesheets().add("atm.css"); // tell the app to use our css file
    window.setScene(scene);
    window.show();
  }

  /**
   * This is how the View talks to the Controller. This method is called when a
   * button is pressed. It fetches the label on the button and passes it to the
   * controller's process method.
   *
   * @see Controller
   *
   * @param event an ActionEvent called by a button in the view, has a label which
   *              is read.
   */
  public void buttonClicked(ActionEvent event) {
    Button b = ((Button) event.getSource());
    if (controller != null) {
      String label = b.getText(); // get the button label
      Debug.trace("View::buttonClicked: label = " + label);
      controller.process(label); // process the controlled based on the label
    }
  }

  /**
   * This is how the Model talks to the View. This method gets called BY THE
   * MODEL, whenever the model changes It fetches the title, display1 and display2
   * variables from the model and displays them in the GUI
   */
  public void update() {
    if (model != null) {
      Debug.trace("View::update");
      String message1 = model.title; // get the new title from the model
      title.setText(message1); // set the message text to be the title
      String message2 = model.display1; // get the new message1 from the model
      message.setText(message2); // add it as text of GUI control output1
      String message3 = model.display2; // get the new message2 from the model
      reply.setText(message3); // add it as text of GUI control output2
    }
  }
}
