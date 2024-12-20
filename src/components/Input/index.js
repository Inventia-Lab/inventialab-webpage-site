import { useState } from 'react';
import styles from '../../styles/components/input.module.css';
import Text from '../Text';
import { useApiContext } from '../../context/wrappers/ContextProvider';
import useResponsive from '../../hooks/useResponsive';
import ItemUploaded from './ItemUploaded';
// import Image from 'next/image';

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  id,
  className = '',
  options = [],
  handleDelete,
  ...rest
}) => {

  const { t } = useApiContext();
  const isResponsive = useResponsive(768);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    onChange({ target: { files } });
  };

  const uploadTitle = {
    text: placeholder,
    tag: "p",
    font: "poppinsRegular",
    size: isResponsive ? 14 : 20,
    color: 'blackCaption',
  };

  const dragAndDropText = {
    text: t('upload.text1'),
    tag: "p",
    font: "poppinsMedium",
    size: isResponsive ? 12 : 16,
    color: 'blackHalf',
  };

  const selectDocumentText = {
    text: isResponsive ? t('upload.text2-mobile') : t('upload.text2'),
    tag: "p",
    font: "poppinsMedium",
    size: isResponsive ? 12 : 16,
    color: 'blueLink',
  };

  const extensionsText = {
    text: t('upload.text3'),
    tag: "p",
    font: "poppinsRegular",
    size: isResponsive ? 10 : 12,
    color: 'blackCaption',
  };

  if (type === 'file') {
    return (
      <>
        <div className={styles.filePlaceholder}><Text text={uploadTitle} /></div>
        <div
          className={`${styles.fileInputContainer} ${isDragging ? styles.dragging : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <label className={styles.fileLabel} htmlFor={id}>
            <input
              type="file"
              onChange={onChange}
              name={name}
              id={id}
              className={styles.fileInput}
              {...rest}
            />
            <div className={styles.fileText1}>
              <img
                src="/images/components/input/upload.svg"
                alt="Upload File"
                width={32}
                height={32}
                // priority
              />
            </div>
            {!isResponsive ?
              <div>
                <Text text={dragAndDropText} className={styles.fileText1} />
              </div> : null
            }
            <div><Text text={selectDocumentText} className={styles.fileText2} /></div>
            <div><Text text={extensionsText} className={styles.fileText3} /></div>
          </label>
        </div>
        {value && value?.length > 0 ? (
          <ul>
            {value?.map((file, index) => (
              <ItemUploaded
                handleDelete={handleDelete}
                key={index}
                text={file.name}
                index={index}
                name={name}
              />
            ))}
          </ul>
        ) : null}
      </>
    );
  }

  if (type === 'select') {
    return (
      <div>
        <select
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          className={`${className} ${styles.input} ${styles.customSelect}`}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.label}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        className={`${className} ${styles.input}`}
        {...rest}
      />
    </div>
  );
};

export default Input;