import { Card } from 'react-bootstrap';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <Card>
      <Card.Img
        variant='top'
        src={imgUrl}
        style={{ width: '200px', alignSelf: 'center' }}
      />
      <Card.Body className={'d-flex flex-column'}>
        <Card.Title
          className={
            'd-flex justify-content-between align-items-baseline mb-4'
          }>
          <span className={'fs-2'}>{name}</span>
          <span className={'ms2 text-muted'}>{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
