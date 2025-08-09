import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { IModal } from './types';

export function Modal({
  BodyContent,
  FooterContent,
  headerTitle,
  onClose,
  open,
}: IModal) {
  return (
    <Dialog open={open} onOpenChange={() => onClose()}>
      <form>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>{headerTitle}</DialogTitle>
          </DialogHeader>
          {<BodyContent />}
          <DialogFooter>{FooterContent && <FooterContent />}</DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
