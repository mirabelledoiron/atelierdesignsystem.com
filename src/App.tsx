import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Foundations
import ColorsPage from "./pages/ColorsPage";
import TypographyPage from "./pages/TypographyPage";
import SpacingPage from "./pages/SpacingPage";
import ShadowsPage from "./pages/ShadowsPage";
import BorderRadiusPage from "./pages/BorderRadiusPage";
import MotionPage from "./pages/MotionPage";
import ZIndexPage from "./pages/ZIndexPage";
import BreakpointsPage from "./pages/BreakpointsPage";
import IconsPage from "./pages/IconsPage";

// Form & Input
import ButtonsPage from "./pages/ButtonsPage";
import InputsPage from "./pages/InputsPage";
import TextareaPage from "./pages/TextareaPage";
import SelectPage from "./pages/SelectPage";
import FormControlsPage from "./pages/FormControlsPage";
import TogglesPage from "./pages/TogglesPage";
import SlidersPage from "./pages/SlidersPage";
import OtpInputPage from "./pages/OtpInputPage";
import DatePickerPage from "./pages/DatePickerPage";
import ColorPickerPage from "./pages/ColorPickerPage";
import FileUploadPage from "./pages/FileUploadPage";
import RatingPage from "./pages/RatingPage";

// Data Display
import CardsPage from "./pages/CardsPage";
import BadgesPage from "./pages/BadgesPage";
import AvatarPage from "./pages/AvatarPage";
import TablePage from "./pages/TablePage";
import SkeletonsPage from "./pages/SkeletonsPage";
import ProgressPage from "./pages/ProgressPage";
import TimelinePage from "./pages/TimelinePage";
import TreeViewPage from "./pages/TreeViewPage";
import KbdPage from "./pages/KbdPage";

// Navigation
import TabsAccordionPage from "./pages/TabsAccordionPage";
import BreadcrumbPage from "./pages/BreadcrumbPage";
import PaginationPage from "./pages/PaginationPage";
import DropdownMenuPage from "./pages/DropdownMenuPage";
import CommandPage from "./pages/CommandPage";

// Overlay & Feedback
import DialogsPage from "./pages/DialogsPage";
import DrawerPage from "./pages/DrawerPage";
import TooltipPopoverPage from "./pages/TooltipPopoverPage";
import AlertsPage from "./pages/AlertsPage";

// Disclosure & Media
import CollapsiblePage from "./pages/CollapsiblePage";
import CarouselPage from "./pages/CarouselPage";
import SeparatorPage from "./pages/SeparatorPage";

// Patterns
import FormPatternsPage from "./pages/patterns/FormPatternsPage";
import LayoutPatternsPage from "./pages/patterns/LayoutPatternsPage";
import ContentStatesPage from "./pages/patterns/ContentStatesPage";
import DataPatternsPage from "./pages/patterns/DataPatternsPage";

// Guidelines
import AccessibilityPage from "./pages/AccessibilityPage";
import EffectsPage from "./pages/EffectsPage";
import DesignPrinciplesPage from "./pages/guidelines/DesignPrinciplesPage";
import ContentGuidelinesPage from "./pages/guidelines/ContentGuidelinesPage";
import ContributionPage from "./pages/guidelines/ContributionPage";
import TokensPage from "./pages/TokensPage";

// Legacy redirect
import LayoutPage from "./pages/LayoutPage";
import GetStartedPage from "./pages/GetStartedPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-started" element={<GetStartedPage />} />

          {/* Foundations */}
          <Route path="/colors" element={<ColorsPage />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/spacing" element={<SpacingPage />} />
          <Route path="/layout" element={<LayoutPage />} />
          <Route path="/shadows" element={<ShadowsPage />} />
          <Route path="/border-radius" element={<BorderRadiusPage />} />
          <Route path="/motion" element={<MotionPage />} />
          <Route path="/z-index" element={<ZIndexPage />} />
          <Route path="/breakpoints" element={<BreakpointsPage />} />
          <Route path="/icons" element={<IconsPage />} />

          {/* Form & Input */}
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/inputs" element={<InputsPage />} />
          <Route path="/textarea" element={<TextareaPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/form-controls" element={<FormControlsPage />} />
          <Route path="/toggles" element={<TogglesPage />} />
          <Route path="/sliders" element={<SlidersPage />} />
          <Route path="/otp-input" element={<OtpInputPage />} />
          <Route path="/date-picker" element={<DatePickerPage />} />
          <Route path="/color-picker" element={<ColorPickerPage />} />
          <Route path="/file-upload" element={<FileUploadPage />} />
          <Route path="/rating" element={<RatingPage />} />

          {/* Data Display */}
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/avatar" element={<AvatarPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/skeletons" element={<SkeletonsPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/tree-view" element={<TreeViewPage />} />
          <Route path="/kbd" element={<KbdPage />} />

          {/* Navigation */}
          <Route path="/tabs" element={<TabsAccordionPage />} />
          <Route path="/breadcrumb" element={<BreadcrumbPage />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path="/dropdown-menu" element={<DropdownMenuPage />} />
          <Route path="/command" element={<CommandPage />} />

          {/* Overlay & Feedback */}
          <Route path="/dialogs" element={<DialogsPage />} />
          <Route path="/drawer" element={<DrawerPage />} />
          <Route path="/tooltip-popover" element={<TooltipPopoverPage />} />
          <Route path="/alerts" element={<AlertsPage />} />

          {/* Disclosure & Media */}
          <Route path="/collapsible" element={<CollapsiblePage />} />
          <Route path="/carousel" element={<CarouselPage />} />
          <Route path="/separator" element={<SeparatorPage />} />

          {/* Patterns */}
          <Route path="/patterns/forms" element={<FormPatternsPage />} />
          <Route path="/patterns/layout" element={<LayoutPatternsPage />} />
          <Route path="/patterns/content" element={<ContentStatesPage />} />
          <Route path="/patterns/data" element={<DataPatternsPage />} />

          {/* Guidelines */}
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/effects" element={<EffectsPage />} />
          <Route path="/guidelines/principles" element={<DesignPrinciplesPage />} />
          <Route path="/guidelines/content" element={<ContentGuidelinesPage />} />
          <Route path="/guidelines/contributing" element={<ContributionPage />} />
          <Route path="/tokens" element={<TokensPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
