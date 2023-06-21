// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  renderThumbnails = () => {
    const {imagesList, onClickUpdateId, selectedImageId} = this.props
    return imagesList.map(eachItem => {
      const {thumbnailUrl, id, thumbnailAltText} = eachItem
      const onClickThumbnail = () => {
        onClickUpdateId(id)
      }
      const buttonName =
        id === selectedImageId ? 'selected-list-item' : 'list-item'

      return (
        <li key={id} className={buttonName} onClick={onClickThumbnail}>
          <button type="button">
            <img
              src={thumbnailUrl}
              alt={thumbnailAltText}
              className="thumbnail-image"
            />
          </button>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="thumbnail-list-container">{this.renderThumbnails()}</ul>
    )
  }
}

export default ThumbnailItem
