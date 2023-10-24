//@ Packages
import React from 'react';
import { useRouter } from 'next/router';
//@ Scripts
import UploadFiles from '@/components/UploadFiles';
import ShowFilesComponent from '@/components/ShowFiles';
import Topbar from '@/components/Topbar';
import FetchFiles from '@/components/hooks/fetchFiles';
import useSessionHook from '@/components/hooks/useSession';

const Folder = () => {
  const router = useRouter();
  const parentId = router.query.id;
  const { session } = useSessionHook();
  const files = FetchFiles(parentId  as string, session?.user?.email ?? "");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <Topbar />
      <UploadFiles parentId={parentId as string}/>
      <ShowFilesComponent  parentId={parentId as string}/>
    </main>
  )
}

export default Folder