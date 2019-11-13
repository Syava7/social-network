import React from 'react'
import Button from '@material-ui/core/Button'
import classes from './Paginator.module.css'
import ButtonGroup from '@material-ui/core/ButtonGroup'




const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pages = []
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i)
  }

  return (
      <div>
        <ButtonGroup>
          {
            pages.map(page => {
              return <Button className={currentPage === page && classes.selectedPage}
                              onClick={ (e) => {
                              onPageChanged(page)
                              }}>{page}
                      </Button>
              
            })
          }
        </ButtonGroup>
      </div>
  
  )
}

export default Paginator
