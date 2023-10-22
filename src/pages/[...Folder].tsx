import React from 'react';
import { useRouter } from 'next/router';
import UploadFiles from '@/components/UploadFiles';
import ShowFilesComponent from '@/components/ShowFiles';
import Topbar from '@/components/Topbar';


const Folder = () => {
  const router = useRouter();


  const parentId = router.query.id;

  return (
    <div>
      <Topbar />
      <UploadFiles parentId={parentId as string}/>
      <ShowFilesComponent  parentId={parentId as string}/>
    </div>
  )
}

export default Folder