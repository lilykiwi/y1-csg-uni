# ATM Project

## Preamble

This is a submodule for my Year 1 university coursework for Computer Science for Games, available at <https://github.com/summerysaturn/y1-university> or <https://summerysaturn.github.io/y1-university/>. This project is derived from some source code provided by the university, then extended. See the doc entitled [CHANGES.MD](CHANGES.md) for a technical report on all the changes included in this project

## Usage

In your command line, run the following command to build:

Linux/MacOS:

```shell
./gradlew build
```

Windows:

```cmd
./gradlew.bat build
```

Similarly, to build the JavaDoc documentation from source, run:

Linux/MacOS:

```shell
./gradlew doc
```

Windows:

```cmd
./gradlew.bat doc
```

This uses the config in build.gradle to generate javadoc with the correct classpath and sourceSets. `javadoc` also probably works, although if there's any issues `doc` would be the ideal command.
