import PageSidebar from '../components/blocks/PageSidebar';
import PageNavigation from '../components/blocks/PageNavigation';

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: IProps): JSX.Element => (
  <>
    <PageSidebar />
    <PageNavigation />
    <div className="page-content">{children}</div>
  </>
);

export default DefaultLayout;
