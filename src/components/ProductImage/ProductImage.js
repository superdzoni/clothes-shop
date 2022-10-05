import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = ({ name, currentColor, title }) => {
	return (
	<div className={styles.imageContainer}>
		<img
			className={styles.image}
			alt={title}
			src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
	</div>
	);
};

ProductImage.propTypes = {
	name: PropTypes.string.isRequired,
	currentColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductImage;