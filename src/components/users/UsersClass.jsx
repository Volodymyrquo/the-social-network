import React from "react";
import * as axios from "axios";
import styles from "./Users.module.css";

class UsersClass extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
     
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    )
    .then((response) => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
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
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
              onClick={() => {this.onPageChanged(item)} }
              className={this.props.currentPage === item && styles.selectedPage}
            >
              {item}
            </span>
          ))}
        </div>

        {this.props.users.map((item) => (
          <div key={item.id}>
            <div>
              {item.photos.small ? (
                <img
                  src={item.photos.small}
                  alt={item.name}
                  title={item.name}
                  className={styles.photo}
                />
              ) : (
                <img
                  className={styles.photo}
                  src={`https://source.unsplash.com/collection/${
                    photo[Math.floor(Math.random() * photo.length)]
                  }/800x600`}
                  alt={item.name}
                  title="unsplash"
                />
              )}
            </div>

            <div>{item.name}</div>
            <div>{item.status}</div>
            <div>
              {item.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(item.id);
                  }}
                >
                  follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(item.id);
                  }}
                >
                  unfollow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default UsersClass;
