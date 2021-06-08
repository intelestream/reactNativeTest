import * as React from 'react'
import { Colors } from 'src/theme'
import { Portal, Paragraph, Dialog, Button as PapperButton } from 'react-native-paper'
import { PropTypes } from 'prop-types'


const ErrorPopup = (props) => {

    return (
        <Portal>
            <Dialog 
                visible={props.visible} 
                onDismiss={props.onDismiss}
            >
                <Dialog.Title>An Error Has Occured!</Dialog.Title>

                <Dialog.Content>
                    <Paragraph>
                        {props.errorMessage}
                    </Paragraph>
                </Dialog.Content>

                <Dialog.Actions>
                    <PapperButton
                        color={Colors.primary}
                        mode='contained'
                        onPress={props.onDismiss}
                    >
                        Okay
                    </PapperButton>
                </Dialog.Actions>

            </Dialog>
        </Portal>
    )
}

ErrorPopup.defaultProps = {
    errorMessage: 'An unknown error has occurred!'
}

ErrorPopup.propTypes = {
    visible: PropTypes.bool.isRequired,
    onDismiss: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}

export default ErrorPopup