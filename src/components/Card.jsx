export const Card = (props) => {
  const {index, work, clickDeleteButtonHandler, clickCompleteButtonHandler} = props;

  return (
    <div className={work.isDone ? 'done-card' : 'working-card'} key={index}>
      <div className="title-working">{work.title}</div>
      <div className="content-working">{work.content}</div>
      <div className="button-working">
        <button className="delete-button" onClick={() => clickDeleteButtonHandler(index)}>
          삭제하기
        </button>
        <button className="complete-button" onClick={() => clickCompleteButtonHandler(index)}>
          {work.isDone ? '취소' : '완료'}
        </button>
      </div>
    </div>
  );
};
