import * as classnames from "classnames"
import * as React from "react"

interface IProgressProps {
  isDanger?: boolean
  isInfo?: boolean
  isLarge?: boolean
  isLink?: boolean
  isMedium?: boolean
  isPrimary?: boolean
  isSmall?: boolean
  isSuccess?: boolean
  isWarning?: boolean
  max: number
  value: number
}

export default class Progress extends React.Component<IProgressProps> {
  render() {
    const {
      isDanger,
      isInfo,
      isLarge,
      isLink,
      isMedium,
      isPrimary,
      isSmall,
      isSuccess,
      isWarning,
      max,
      value,
    } = this.props

    const className = classnames("tag", {
      "is-danger": isDanger,
      "is-info": isInfo,
      "is-large": isLarge,
      "is-link": isLink,
      "is-medium": isMedium,
      "is-primary": isPrimary,
      "is-small": isSmall,
      "is-success": isSuccess,
      "is-warning": isWarning
    })

    return (
      <progress
        className={className}
        max={max}
        value={value}
      >
        {this.props.children}
      </progress>
    )
  }
}
