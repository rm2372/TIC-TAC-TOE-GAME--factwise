// Square.js
import "./Square.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

const Square = ({ ind, updateSquares, clsName }) => {
    const handleClick = () => {
        updateSquares(ind);
    };
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="square"
            onClick={handleClick}
        >
            {clsName && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={clsName}
                >
                    {clsName === 'x' ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faCheck} />
                    )}
                </motion.span>
            )}
        </motion.div>
    );
};

export default Square;
