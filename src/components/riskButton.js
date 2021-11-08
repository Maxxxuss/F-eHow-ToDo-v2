import React from 'react';
// import { createTheme, makeStyles } from '@mui/material/styles'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { green } from '@mui/material/colors';

// const useStyles = makeStyles((theme) => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },

// }));
// const theme = createTheme({
//     palette: {
//         primary: green,
//     },
// });


export default function SetRisk(props) {
    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [auswirkung, setAuswirkung] = React.useState("");
    const [occurence, setOccurence] = React.useState("")

    const propRiskAus = props.activeNote.riskAuswirkung ? props.activeNote.riskAuswirkung : ""
    const propsRiskWahr = props.activeNote.riskWahrscheinlichkeit ? props.activeNote.riskWahrscheinlichkeit : ""

    const handelAuswirkungChange = (event) => {
        setAuswirkung(Number(event.target.value) || '');
    };

    const handelOccurenceChange = (event) => {
        setOccurence(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setAuswirkung("")
        setOccurence("")
        setOpen(false);
    };

    const handelAddRisk = () => {
        props.editNote(
            props.activeNote.id, {
            riskAuswirkung: auswirkung,
            riskWahrscheinlichkeit: occurence
        })
        handleClose()

    }

    const showRisikButton = () => {
        if (propRiskAus != "" || propsRiskWahr != "") {
            return "Edit Risk"
        } else {
            return "Set Risk"
        }
    }


    return (
        <div>
            <Button
                onClick={handleClickOpen}
                color="secondary"
                variant="outlined"
                theme={theme}


            >{showRisikButton()}</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <form >
                        <FormControl >
                            <InputLabel htmlFor="demo-dialog-native">Auswirkung</InputLabel>
                            <Select
                                native
                                value={auswirkung}
                                onChange={handelAuswirkungChange}
                                input={<Input id="demo-dialog-native" />}
                            >
                                <option aria-label="None" value="" />
                                <option value={120}>Hoch</option>
                                <option value={113}>Mittel</option>
                                <option value={105}>Niedrig</option>
                            </Select>
                        </FormControl>
                        <FormControl >
                            <InputLabel id="demo-dialog-select-label"> Eintritts-WS </InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={occurence}
                                onChange={handelOccurenceChange}
                                input={<Input />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={120}>Hoch</MenuItem>
                                <MenuItem value={113}>Mittel</MenuItem>
                                <MenuItem value={105}>Niedrig</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handelAddRisk} color="primary">
                        Add Risk
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
