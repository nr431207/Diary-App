import React, { useState } from 'react';
import {
  truncateText,
  trimDate,
  isTextShort
} from '../utils/utils';
import Button from 'react-bootstrap/Button';
import * as style from './style.css';

const Diary = ({ diary, handleEdit, toggleDeleteModal }) => {
  const [isExpanded, toggleExpand] = useState(false);
  const { title, content, creationDate, id } = diary;

  return (
    <div onClick={() => { toggleExpand(!isExpanded) }} class="card mt-4">
      <div class="card-body">
        <span className={style.date}><h3 class="card-title">{title}</h3>
          <div>{trimDate(creationDate)}</div></span>
        {isTextShort(content) ?
          <div>
            <p class="card-text">{content}</p>
          </div>
          :
          isExpanded ?
            <div>
              <p class="card-text">{content}</p>
              <Button variant="secondary" onClick={() => { toggleExpand(isExpanded) }}>Read Less</Button>
            </div>
            :
            <div>
              <p class="card-text">{truncateText(content)}</p>
              <Button variant="secondary" onClick={() => { toggleExpand(isExpanded) }}>Read More</Button>
            </div>
        }
        <span>
          <Button variant="danger" onClick={toggleDeleteModal} value={id} className={style.margin}>Delete</Button>
          <Button variant="primary" onClick={handleEdit} value={id} className={style.margin}>Edit</Button>
        </span>
      </div>
    </div>
  )
}
export default Diary;