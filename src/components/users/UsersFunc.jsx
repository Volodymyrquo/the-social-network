import React from 'react';
import styles from './Users.module.css';
import { NavLink } from '../Header/node_modules/react-router-dom';

const UsersFunc = (props) => {
  const photo = [
    1051,
    1194,
    1236,
    1238,
    159213,
    181462,
    201032,
    201065,
    213594,
    228643,
    273258,
    276754,
    302501,
    368775,
    573722,
    793535,
    895539,
    1252081,
    1390381,
  ];
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((item) => (
          <span
            key={item}
            onClick={() => {
              props.onPageChanged(item);
            }}
            className={props.currentPage === item && styles.selectedPage}>
            {item}
          </span>
        ))}
      </div>

      {props.users.map((item) => (
        <div key={item.id}>
          <div>
            {item.photos.small ? (
              <NavLink to={`/profile/${item.id}`}>
                <img
                  src={item.photos.small}
                  alt={item.name}
                  title={item.name}
                  className={styles.photo}
                />
              </NavLink>
            ) : (
              <NavLink to={`/profile/${item.id}`}>
                <img
                  className={styles.photo}
                  src={`https://source.unsplash.com/collection/${
                    photo[Math.floor(Math.random() * photo.length)]
                  }/800x600`}
                  alt={item.name}
                  title='unsplash'
                />
              </NavLink>
            )}
          </div>

          <div>{item.name}</div>
          <div>{item.status}</div>
          <div>
            {item.followed ? (
              <button
                onClick={() => {
                  props.unfollow(item.id);
                }}>
                follow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(item.id);
                }}>
                unfollow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersFunc;
