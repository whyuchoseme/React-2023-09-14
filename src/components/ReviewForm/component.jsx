import classNames from "classnames";
import { useReducer } from "react"
import { Button } from "../Button/component";
import styles from "./styles.module.css"

const DEFAULT_VALUE = {
    userName:'',
    text:'',
    rating:'',
};

const reducer = (state, action) => {
    switch (action?.type) {
        case 'setUserName':
            return {...state, userName: action.payload};
        case 'setText':
            return {...state, text: action.payload};
        case 'setRating':
            return {...state, rating: action.payload};
        case 'reset':
            return {...DEFAULT_VALUE};
        default:
            return state;
    }
}

export const ReviewForm = ({ className }) => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);

    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <span>Your Name: {formValue.userName}</span>
                <input 
                    value={formValue.userName} 
                    onChange={(event) => {
                        dispatch({type: 'setUserName', payload: event.target.value})
                    }}
                    placeholder="add your name"
                />
            </div>
            <div>
                <span>Text: {formValue.text}</span>
                <input
                    value={formValue.text}
                    onChange={(event) => {
                        dispatch({type: 'setText', payload: event.target.value})
                    }}
                    placeholder="add your review"
                 />
            </div>
            <div>
                <span>Rating: {formValue.rating}</span>
                <input
                    className={styles.ratingInp}
                    type={"number"}
                    value={formValue.rating}
                    onChange={(event) => {
                        dispatch({type: 'setRating', payload: event.target.value})
                    }}
                    placeholder="1-5" min="1" max="5"
                 />
            </div>
            <Button
                className={styles.saveButton}
                onClick={() => dispatch({type: 'reset'})}>
                    Save review
            </Button>
        </div>
    )
}