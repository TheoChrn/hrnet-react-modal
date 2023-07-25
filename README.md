# Hrnet React Modal

Customizable modal built for the [WealthHealth](https://github.com/TheoChrn/Wealth-Health) project

## Prerequisites

- Node.js v16+
- npm 8+

## Setup

1. Download or clone this repository
2. Go to the project folder
3. Install the modal with  `npm i volturuss-hrnet-react-modal`

## Modal prerequisites

The modal needs a few props to work properly

- `onClose` contains a closing function
- `dipslay` contains a boolean that will un/show the modal

It will also need a content inside the component tags

## Classic Modal
```bash
  <Modal onClose={closeModal} display={displayModal}>
    Modal content goes here
  </Modal>
```
#### Model
![App Screenshot](https://media.discordapp.net/attachments/856250851069001739/1123601973065822238/image.png?width=850&height=185)

## Customized modal
To custom our modal we'll need to add more props
- `containerClassName` Is applied on the modal container (can be used to blur the background)
- `modalClassName` Is applied on the modal 
- `closeButtonClassName` Is applied on the button
- `className` Is applied on the modal content
- `BtnIcon` Set a custom button icon

```bash
  <Modal
    onClose={closeModal}
    display={displayModal}
    containerClassName={styles.modalContainer}
    modalClassName={styles.modal}
    closeButtonClassName={styles.closeModalBtn}
    btnIcon={<>&#10004;</>}
    className={styles.modalContent}
  >
    <h1>HRnet</h1>
    <p>Employee created !</p>
  </Modal>
```
#### Model
![App Screenshot](https://media.discordapp.net/attachments/856250851069001739/1124270554850021466/image.png?width=958&height=558)
