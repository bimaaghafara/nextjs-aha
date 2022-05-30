// styles & components
import TagsContent from './components/Content';

// services
import { useGetTags } from './Services';

export default function Tags() {
  const { data, error, isLoading } = useGetTags();
  const contentProps = {
    error,
    isLoading,
    data
  };

  return <TagsContent {...contentProps} />;
}
